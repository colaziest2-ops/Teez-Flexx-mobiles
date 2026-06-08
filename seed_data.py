import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path
import bcrypt

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

iphone_products = [
    # iPhone 11 Series
    {"model": "iPhone 11", "storage": "64GB", "color": "Black", "condition": "Excellent", "price": 5999, "original_price": 7999},
    {"model": "iPhone 11", "storage": "128GB", "color": "White", "condition": "New", "price": 7499, "original_price": None},
    {"model": "iPhone 11 Pro", "storage": "256GB", "color": "Midnight Green", "condition": "Excellent", "price": 8999, "original_price": 11999},
    {"model": "iPhone 11 Pro Max", "storage": "256GB", "color": "Space Grey", "condition": "Good", "price": 9499, "original_price": 13999},
    
    # iPhone 12 Series
    {"model": "iPhone 12", "storage": "128GB", "color": "Blue", "condition": "New", "price": 10499, "original_price": None},
    {"model": "iPhone 12", "storage": "256GB", "color": "Purple", "condition": "Excellent", "price": 9999, "original_price": 12499},
    {"model": "iPhone 12 mini", "storage": "128GB", "color": "Green", "condition": "Excellent", "price": 8999, "original_price": 10999},
    {"model": "iPhone 12 Pro", "storage": "256GB", "color": "Gold", "condition": "New", "price": 13999, "original_price": None},
    {"model": "iPhone 12 Pro Max", "storage": "512GB", "color": "Pacific Blue", "condition": "Excellent", "price": 14999, "original_price": 18999},
    
    # iPhone 13 Series
    {"model": "iPhone 13", "storage": "128GB", "color": "Pink", "condition": "New", "price": 12999, "original_price": None},
    {"model": "iPhone 13", "storage": "256GB", "color": "Starlight", "condition": "Excellent", "price": 12499, "original_price": 14999},
    {"model": "iPhone 13 mini", "storage": "128GB", "color": "Midnight", "condition": "Excellent", "price": 10999, "original_price": 12999},
    {"model": "iPhone 13 Pro", "storage": "256GB", "color": "Sierra Blue", "condition": "New", "price": 16999, "original_price": None},
    {"model": "iPhone 13 Pro", "storage": "512GB", "color": "Graphite", "condition": "Excellent", "price": 17999, "original_price": 21999},
    {"model": "iPhone 13 Pro Max", "storage": "512GB", "color": "Alpine Green", "condition": "New", "price": 19999, "original_price": None},
    {"model": "iPhone 13 Pro Max", "storage": "1TB", "color": "Gold", "condition": "Excellent", "price": 21999, "original_price": 26999},
    
    # iPhone 14 Series
    {"model": "iPhone 14", "storage": "128GB", "color": "Blue", "condition": "New", "price": 14999, "original_price": None},
    {"model": "iPhone 14", "storage": "256GB", "color": "Purple", "condition": "Excellent", "price": 15999, "original_price": 18999},
    {"model": "iPhone 14 Plus", "storage": "256GB", "color": "Midnight", "condition": "New", "price": 17999, "original_price": None},
    {"model": "iPhone 14 Pro", "storage": "256GB", "color": "Deep Purple", "condition": "New", "price": 20999, "original_price": None},
    {"model": "iPhone 14 Pro", "storage": "512GB", "color": "Space Black", "condition": "Excellent", "price": 21999, "original_price": 24999},
    {"model": "iPhone 14 Pro Max", "storage": "512GB", "color": "Gold", "condition": "New", "price": 24999, "original_price": None},
    {"model": "iPhone 14 Pro Max", "storage": "1TB", "color": "Silver", "condition": "Excellent", "price": 26999, "original_price": 31999},
    
    # iPhone 15 Series
    {"model": "iPhone 15", "storage": "128GB", "color": "Pink", "condition": "New", "price": 17999, "original_price": None},
    {"model": "iPhone 15", "storage": "256GB", "color": "Blue", "condition": "Excellent", "price": 18999, "original_price": 21999},
    {"model": "iPhone 15 Plus", "storage": "256GB", "color": "Black", "condition": "New", "price": 20999, "original_price": None},
    {"model": "iPhone 15 Pro", "storage": "256GB", "color": "Natural Titanium", "condition": "New", "price": 24999, "original_price": None},
    {"model": "iPhone 15 Pro", "storage": "512GB", "color": "Blue Titanium", "condition": "Excellent", "price": 26999, "original_price": 29999},
    {"model": "iPhone 15 Pro Max", "storage": "512GB", "color": "White Titanium", "condition": "New", "price": 29999, "original_price": None},
    {"model": "iPhone 15 Pro Max", "storage": "1TB", "color": "Black Titanium", "condition": "Excellent", "price": 32999, "original_price": 37999},
    
    # iPhone 16 Series
    {"model": "iPhone 16", "storage": "128GB", "color": "Ultramarine", "condition": "New", "price": 20999, "original_price": None},
    {"model": "iPhone 16", "storage": "256GB", "color": "Teal", "condition": "New", "price": 22999, "original_price": None},
    {"model": "iPhone 16 Plus", "storage": "256GB", "color": "Pink", "condition": "New", "price": 24999, "original_price": None},
    {"model": "iPhone 16 Pro", "storage": "256GB", "color": "Desert Titanium", "condition": "New", "price": 28999, "original_price": None},
    {"model": "iPhone 16 Pro", "storage": "512GB", "color": "Natural Titanium", "condition": "New", "price": 31999, "original_price": None},
    {"model": "iPhone 16 Pro Max", "storage": "512GB", "color": "White Titanium", "condition": "New", "price": 34999, "original_price": None},
    {"model": "iPhone 16 Pro Max", "storage": "1TB", "color": "Black Titanium", "condition": "New", "price": 38999, "original_price": None},
    
    # iPhone 17 Series
    {"model": "iPhone 17", "storage": "256GB", "color": "Black", "condition": "New", "price": 24999, "original_price": None},
    {"model": "iPhone 17", "storage": "512GB", "color": "Blue", "condition": "New", "price": 27999, "original_price": None},
    {"model": "iPhone 17 Air", "storage": "256GB", "color": "Silver", "condition": "New", "price": 26999, "original_price": None},
    {"model": "iPhone 17 Air", "storage": "512GB", "color": "Space Grey", "condition": "New", "price": 29999, "original_price": None},
    {"model": "iPhone 17 Pro", "storage": "256GB", "color": "Natural Titanium", "condition": "New", "price": 32999, "original_price": None},
    {"model": "iPhone 17 Pro", "storage": "512GB", "color": "Blue Titanium", "condition": "New", "price": 36999, "original_price": None},
    {"model": "iPhone 17 Pro Max", "storage": "512GB", "color": "White Titanium", "condition": "New", "price": 39999, "original_price": None},
    {"model": "iPhone 17 Pro Max", "storage": "1TB", "color": "Black Titanium", "condition": "New", "price": 44999, "original_price": None},
    {"model": "iPhone 17e", "storage": "128GB", "color": "Blue", "condition": "New", "price": 18999, "original_price": None},
    {"model": "iPhone 17e", "storage": "256GB", "color": "Pink", "condition": "New", "price": 20999, "original_price": None},
]

iphone_images = [
    "https://images.unsplash.com/photo-1632633173522-63ddf5fc792c?w=800",
    "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=800",
    "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800",
    "https://images.unsplash.com/photo-1592286927505-2fd28c3ef0a4?w=800",
    "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800",
]

accessories = [
    {
        "model": "USB-C to Lightning Cable",
        "storage": "N/A",
        "color": "White",
        "condition": "New",
        "price": 299,
        "category": "Accessory",
        "description": "Fast charging cable for iPhone"
    },
    {
        "model": "20W USB-C Power Adapter",
        "storage": "N/A",
        "color": "White",
        "condition": "New",
        "price": 399,
        "category": "Accessory",
        "description": "Fast charging adapter"
    },
    {
        "model": "Tempered Glass Screen Protector",
        "storage": "N/A",
        "color": "Clear",
        "condition": "New",
        "price": 199,
        "category": "Accessory",
        "description": "9H hardness screen protection"
    },
    {
        "model": "Silicone Case",
        "storage": "N/A",
        "color": "Black",
        "condition": "New",
        "price": 499,
        "category": "Case",
        "description": "Premium silicone case with MagSafe"
    },
]

phone_covers = [
    {
        "model": "Colorful Geometric Case",
        "storage": "N/A",
        "color": "Multi",
        "condition": "New",
        "price": 349,
        "category": "Case",
        "image": "https://images.unsplash.com/photo-1535157412991-2ef801c1748b?w=800",
        "description": "Vibrant geometric pattern phone case"
    },
    {
        "model": "Premium Leather Case",
        "storage": "N/A",
        "color": "Brown",
        "condition": "New",
        "price": 599,
        "category": "Case",
        "image": "https://images.unsplash.com/photo-1576107324820-c10884700b6b?w=800",
        "description": "Genuine leather case with card slot"
    },
    {
        "model": "Clear Transparent Case",
        "storage": "N/A",
        "color": "Clear",
        "condition": "New",
        "price": 249,
        "category": "Case",
        "image": "https://images.unsplash.com/photo-1623393835885-560a7c576aa2?w=800",
        "description": "Crystal clear protective case"
    },
    {
        "model": "Pastel Rainbow Case",
        "storage": "N/A",
        "color": "Multi",
        "condition": "New",
        "price": 299,
        "category": "Case",
        "image": "https://images.unsplash.com/photo-1623393884989-cb3663e431c5?w=800",
        "description": "Soft pastel rainbow gradient case"
    },
]

async def seed_database():
    print("Clearing existing data...")
    await db.products.delete_many({})
    await db.users.delete_many({})
    
    print("Seeding products...")
    import uuid
    
    all_products = []
    
    for idx, iphone in enumerate(iphone_products):
        product = {
            "product_id": str(uuid.uuid4()),
            "name": f"{iphone['model']} {iphone['storage']} {iphone['color']}",
            "model": iphone['model'],
            "storage": iphone['storage'],
            "color": iphone['color'],
            "condition": iphone['condition'],
            "price": iphone['price'],
            "original_price": iphone.get('original_price'),
            "image": iphone_images[idx % len(iphone_images)],
            "description": f"Apple {iphone['model']} with {iphone['storage']} storage in {iphone['color']}. Condition: {iphone['condition']}.",
            "stock": 10,
            "category": "iPhone",
            "features": ["Face ID", "Wireless Charging", "Water Resistant", "iOS"]
        }
        all_products.append(product)
    
    for accessory in accessories:
        product = {
            "product_id": str(uuid.uuid4()),
            "name": accessory['model'],
            "model": accessory['model'],
            "storage": accessory['storage'],
            "color": accessory['color'],
            "condition": accessory['condition'],
            "price": accessory['price'],
            "original_price": None,
            "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800",
            "description": accessory['description'],
            "stock": 50,
            "category": accessory['category'],
            "features": []
        }
        all_products.append(product)
    
    for cover in phone_covers:
        product = {
            "product_id": str(uuid.uuid4()),
            "name": cover['model'],
            "model": cover['model'],
            "storage": cover['storage'],
            "color": cover['color'],
            "condition": cover['condition'],
            "price": cover['price'],
            "original_price": None,
            "image": cover['image'],
            "description": cover['description'],
            "stock": 30,
            "category": cover['category'],
            "features": ["Drop Protection", "Scratch Resistant"]
        }
        all_products.append(product)
    
    await db.products.insert_many(all_products)
    print(f"Seeded {len(all_products)} products")
    
    # Create admin user
    admin_user = {
        "user_id": str(uuid.uuid4()),
        "email": "admin@teezflexx.co.za",
        "name": "Admin",
        "phone": "+27123456789",
        "password_hash": hash_password("admin123"),
        "is_admin": True
    }
    
    await db.users.insert_one(admin_user)
    print("Admin user created: admin@teezflexx.co.za / admin123")
    
    print("Database seeded successfully!")

if __name__ == "__main__":
    asyncio.run(seed_database())
    client.close()