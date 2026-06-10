/**
 * Supabase Orders/Cart API
 * 
 * Example functions for managing orders through Supabase
 * Connect these to your orders and order_items tables
 * 
 * Expected schema:
 * orders:
 * - id: uuid
 * - user_id: uuid (fk to auth.users)
 * - total: number
 * - status: string ('pending', 'completed', 'cancelled')
 * - created_at: timestamp
 * 
 * order_items:
 * - id: uuid
 * - order_id: uuid (fk to orders)
 * - product_id: uuid (fk to products)
 * - quantity: number
 * - price: number
 */

import { supabase } from './client';

// Create a new order
export const createOrder = async (orderData: any) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .insert([orderData])
      .select();

    if (error) throw error;
    return { data, success: true };
  } catch (error) {
    console.error('Create order error:', error);
    return { error, success: false, data: null };
  }
};

// Fetch user orders
export const fetchUserOrders = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*, order_items(*, products(*))')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { data, success: true };
  } catch (error) {
    console.error('Fetch orders error:', error);
    return { error, success: false, data: null };
  }
};

// Update order status
export const updateOrderStatus = async (orderId: string, status: string) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .update({ status })
      .eq('id', orderId)
      .select();

    if (error) throw error;
    return { data, success: true };
  } catch (error) {
    console.error('Update order error:', error);
    return { error, success: false, data: null };
  }
};
