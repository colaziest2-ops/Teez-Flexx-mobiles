import { supabase } from './client';

/**
 * Supabase Products/Inventory API
 * 
 * Example functions for managing products through Supabase
 * Connect these to your actual products table in Supabase
 * 
 * Expected table schema:
 * - id: uuid (primary key)
 * - model: string
 * - storage: string
 * - condition: string ('New', 'Refurbished', 'Used')
 * - price: number
 * - stock: number
 * - description: text
 * - image_url: string
 * - created_at: timestamp
 * - updated_at: timestamp
 */

// Fetch all products
export const fetchProducts = async () => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { data, success: true };
  } catch (error) {
    console.error('Fetch products error:', error);
    return { error, success: false, data: null };
  }
};

// Fetch product by ID
export const fetchProductById = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return { data, success: true };
  } catch (error) {
    console.error('Fetch product error:', error);
    return { error, success: false, data: null };
  }
};

// Create product (admin only)
export const createProduct = async (productData: any) => {
  try {
    const { data, error } = await supabase
      .from('products')
      .insert([productData])
      .select();

    if (error) throw error;
    return { data, success: true };
  } catch (error) {
    console.error('Create product error:', error);
    return { error, success: false, data: null };
  }
};

// Update product (admin only)
export const updateProduct = async (id: string, updates: any) => {
  try {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select();

    if (error) throw error;
    return { data, success: true };
  } catch (error) {
    console.error('Update product error:', error);
    return { error, success: false, data: null };
  }
};

// Delete product (admin only)
export const deleteProduct = async (id: string) => {
  try {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Delete product error:', error);
    return { success: false, error };
  }
};
