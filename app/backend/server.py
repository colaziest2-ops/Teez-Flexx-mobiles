from fastapi import FastAPI, APIRouter, HTTPException, Depends, status, UploadFile, File, Form
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta
import bcrypt
import jwt
import asyncio
import resend

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")
security = HTTPBearer()

JWT_SECRET = os.environ.get('JWT_SECRET', 'your-secret-key-change-in-production')
JWT_ALGORITHM = "HS256"
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL', 'admin@teezflexx.co.za')

if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

logger = logging.getLogger(__name__)

# ===== MODELS =====

class User(BaseModel):
    model_config = ConfigDict(extra="ignore")
    user_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    name: str
    phone: str
    password_hash: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    is_admin: bool = False

class UserRegister(BaseModel):
    email: EmailStr
    name: str
    phone: str
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    user_id: str
    email: str
    name: str
    phone: str
    is_admin: bool = False

class Product(BaseModel):
    model_config = ConfigDict(extra="ignore")
    product_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    model: str
    storage: str
    color: str
    condition: str
    price: float
    original_price: Optional[float] = None
    image: str
    description: str
    stock: int = 10
    category: str = "iPhone"
    features: List[str] = []

class CartItem(BaseModel):
    product_id: str
    quantity: int = 1

class Cart(BaseModel):
    model_config = ConfigDict(extra="ignore")
    cart_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    items: List[CartItem] = []
    updated_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class DiagnosticRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    request_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    phone_model: str
    issue_description: str
    preferred_date: Optional[str] = None
    status: str = "pending"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class DiagnosticRequestCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    phone_model: str
    issue_description: str
    preferred_date: Optional[str] = None

class TradeInRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    request_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    phone_model: str
    storage: str
    condition: str
    quote_amount: float
    status: str = "pending"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class TradeInRequestCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    phone_model: str
    storage: str
    condition: str

# ===== HELPER FUNCTIONS =====

def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

def verify_password(password: str, hashed: str) -> bool:
    return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))

def create_token(user_id: str, email: str, is_admin: bool = False) -> str:
    payload = {
        "user_id": user_id,
        "email": email,
        "is_admin": is_admin,
        "exp": datetime.now(timezone.utc) + timedelta(days=7)
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

def decode_token(token: str) -> dict:
    try:
        return jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)) -> dict:
    token = credentials.credentials
    return decode_token(token)

async def get_admin_user(user: dict = Depends(get_current_user)) -> dict:
    if not user.get('is_admin'):
        raise HTTPException(status_code=403, detail="Admin access required")
    return user

def calculate_trade_in_quote(model: str, storage: str, condition: str) -> float:
    base_prices = {
        "iPhone 11": 3000, "iPhone 11 Pro": 4000, "iPhone 11 Pro Max": 4500,
        "iPhone 12": 5000, "iPhone 12 mini": 4500, "iPhone 12 Pro": 6000, "iPhone 12 Pro Max": 6500,
        "iPhone 13": 6500, "iPhone 13 mini": 6000, "iPhone 13 Pro": 8000, "iPhone 13 Pro Max": 8500,
        "iPhone 14": 8000, "iPhone 14 Plus": 8500, "iPhone 14 Pro": 10000, "iPhone 14 Pro Max": 11000,
        "iPhone 15": 10000, "iPhone 15 Plus": 11000, "iPhone 15 Pro": 13000, "iPhone 15 Pro Max": 14000,
        "iPhone 16": 12000, "iPhone 16 Plus": 13000, "iPhone 16 Pro": 15000, "iPhone 16 Pro Max": 17000,
        "iPhone 17": 14000, "iPhone 17 Air": 15000, "iPhone 17 Pro": 17000, "iPhone 17 Pro Max": 19000,
        "iPhone 17e": 11000
    }
    
    base = base_prices.get(model, 3000)
    
    storage_multiplier = {"64GB": 0.9, "128GB": 1.0, "256GB": 1.15, "512GB": 1.3, "1TB": 1.5}
    condition_multiplier = {"Excellent": 1.0, "Good": 0.8, "Fair": 0.6}
    
    quote = base * storage_multiplier.get(storage, 1.0) * condition_multiplier.get(condition, 0.8)
    return round(quote, 2)

async def send_email_async(recipient: str, subject: str, html_content: str):
    if not RESEND_API_KEY:
        logger.warning("RESEND_API_KEY not set, email not sent")
        return
    
    params = {
        "from": SENDER_EMAIL,
        "to": [recipient],
        "subject": subject,
        "html": html_content
    }
    
    try:
        await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Email sent to {recipient}")
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")

# ===== AUTH ROUTES =====

@api_router.post("/auth/register")
async def register(user_data: UserRegister):
    existing = await db.users.find_one({"email": user_data.email}, {"_id": 0})
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    user = User(
        email=user_data.email,
        name=user_data.name,
        phone=user_data.phone,
        password_hash=hash_password(user_data.password)
    )
    
    await db.users.insert_one(user.model_dump())
    token = create_token(user.user_id, user.email)
    
    return {
        "token": token,
        "user": UserResponse(**user.model_dump())
    }

@api_router.post("/auth/login")
async def login(credentials: UserLogin):
    user = await db.users.find_one({"email": credentials.email}, {"_id": 0})
    if not user or not verify_password(credentials.password, user['password_hash']):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    token = create_token(user['user_id'], user['email'], user.get('is_admin', False))
    
    return {
        "token": token,
        "user": UserResponse(**user)
    }

@api_router.get("/auth/me", response_model=UserResponse)
async def get_me(current_user: dict = Depends(get_current_user)):
    user = await db.users.find_one({"user_id": current_user['user_id']}, {"_id": 0})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return UserResponse(**user)

# ===== PRODUCTS ROUTES =====

@api_router.get("/products")
async def get_products(
    condition: Optional[str] = None,
    model: Optional[str] = None,
    storage: Optional[str] = None,
    color: Optional[str] = None,
    category: Optional[str] = None
):
    query = {}
    if condition:
        query["condition"] = condition
    if model:
        query["model"] = model
    if storage:
        query["storage"] = storage
    if color:
        query["color"] = color
    if category:
        query["category"] = category
    
    products = await db.products.find(query, {"_id": 0}).to_list(1000)
    return products

@api_router.get("/products/{product_id}")
async def get_product(product_id: str):
    product = await db.products.find_one({"product_id": product_id}, {"_id": 0})
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

# ===== CART ROUTES =====

@api_router.get("/cart")
async def get_cart(current_user: dict = Depends(get_current_user)):
    cart = await db.carts.find_one({"user_id": current_user['user_id']}, {"_id": 0})
    if not cart:
        return {"cart_id": str(uuid.uuid4()), "user_id": current_user['user_id'], "items": []}
    
    # Enrich cart items with product details
    enriched_items = []
    for item in cart.get('items', []):
        product = await db.products.find_one({"product_id": item['product_id']}, {"_id": 0})
        if product:
            enriched_items.append({**item, "product": product})
    
    cart['items'] = enriched_items
    return cart

@api_router.post("/cart")
async def add_to_cart(item: CartItem, current_user: dict = Depends(get_current_user)):
    cart = await db.carts.find_one({"user_id": current_user['user_id']}, {"_id": 0})
    
    if not cart:
        cart = Cart(user_id=current_user['user_id'], items=[item.model_dump()])
        await db.carts.insert_one(cart.model_dump())
    else:
        items = cart.get('items', [])
        existing_item = next((i for i in items if i['product_id'] == item.product_id), None)
        
        if existing_item:
            existing_item['quantity'] += item.quantity
        else:
            items.append(item.model_dump())
        
        await db.carts.update_one(
            {"user_id": current_user['user_id']},
            {"$set": {"items": items, "updated_at": datetime.now(timezone.utc).isoformat()}}
        )
    
    return {"message": "Item added to cart"}

@api_router.delete("/cart/{product_id}")
async def remove_from_cart(product_id: str, current_user: dict = Depends(get_current_user)):
    cart = await db.carts.find_one({"user_id": current_user['user_id']}, {"_id": 0})
    if not cart:
        raise HTTPException(status_code=404, detail="Cart not found")
    
    items = [i for i in cart.get('items', []) if i['product_id'] != product_id]
    
    await db.carts.update_one(
        {"user_id": current_user['user_id']},
        {"$set": {"items": items, "updated_at": datetime.now(timezone.utc).isoformat()}}
    )
    
    return {"message": "Item removed from cart"}

@api_router.put("/cart/{product_id}")
async def update_cart_quantity(product_id: str, quantity: int, current_user: dict = Depends(get_current_user)):
    cart = await db.carts.find_one({"user_id": current_user['user_id']}, {"_id": 0})
    if not cart:
        raise HTTPException(status_code=404, detail="Cart not found")
    
    items = cart.get('items', [])
    item = next((i for i in items if i['product_id'] == product_id), None)
    
    if item:
        item['quantity'] = quantity
    
    await db.carts.update_one(
        {"user_id": current_user['user_id']},
        {"$set": {"items": items, "updated_at": datetime.now(timezone.utc).isoformat()}}
    )
    
    return {"message": "Cart updated"}

# ===== DIAGNOSTIC ROUTES =====

@api_router.post("/diagnostic")
async def create_diagnostic_request(request_data: DiagnosticRequestCreate):
    diagnostic = DiagnosticRequest(**request_data.model_dump())
    await db.diagnostic_requests.insert_one(diagnostic.model_dump())
    
    # Send email notification
    html_content = f"""
    <h2>New Diagnostic Request</h2>
    <p><strong>Name:</strong> {diagnostic.name}</p>
    <p><strong>Email:</strong> {diagnostic.email}</p>
    <p><strong>Phone:</strong> {diagnostic.phone}</p>
    <p><strong>Phone Model:</strong> {diagnostic.phone_model}</p>
    <p><strong>Issue:</strong> {diagnostic.issue_description}</p>
    <p><strong>Preferred Date:</strong> {diagnostic.preferred_date or 'Not specified'}</p>
    """
    
    await send_email_async(ADMIN_EMAIL, "New Diagnostic Request", html_content)
    
    return {"message": "Diagnostic request submitted successfully", "request_id": diagnostic.request_id}

@api_router.get("/admin/diagnostics")
async def get_diagnostics(admin: dict = Depends(get_admin_user)):
    diagnostics = await db.diagnostic_requests.find({}, {"_id": 0}).to_list(1000)
    return diagnostics

# ===== TRADE-IN ROUTES =====

@api_router.post("/trade-in")
async def create_trade_in_request(request_data: TradeInRequestCreate):
    quote = calculate_trade_in_quote(request_data.phone_model, request_data.storage, request_data.condition)
    
    trade_in = TradeInRequest(
        **request_data.model_dump(),
        quote_amount=quote
    )
    
    await db.trade_in_requests.insert_one(trade_in.model_dump())
    
    # Send email notification
    html_content = f"""
    <h2>New Trade-In Request</h2>
    <p><strong>Name:</strong> {trade_in.name}</p>
    <p><strong>Email:</strong> {trade_in.email}</p>
    <p><strong>Phone:</strong> {trade_in.phone}</p>
    <p><strong>Phone Model:</strong> {trade_in.phone_model}</p>
    <p><strong>Storage:</strong> {trade_in.storage}</p>
    <p><strong>Condition:</strong> {trade_in.condition}</p>
    <p><strong>Quote Amount:</strong> R{trade_in.quote_amount}</p>
    """
    
    await send_email_async(ADMIN_EMAIL, "New Trade-In Request", html_content)
    
    return {
        "message": "Trade-in request submitted successfully",
        "quote_amount": quote,
        "request_id": trade_in.request_id
    }

@api_router.get("/admin/trade-ins")
async def get_trade_ins(admin: dict = Depends(get_admin_user)):
    trade_ins = await db.trade_in_requests.find({}, {"_id": 0}).to_list(1000)
    return trade_ins

# ===== GENERAL ROUTES =====

@api_router.get("/")
async def root():
    return {"message": "Teez-Flexx Mobiles API"}

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()