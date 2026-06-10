/**
 * Supabase Diagnostics/Repairs API
 * 
 * Example functions for managing repair/diagnostic requests
 * 
 * Expected schema:
 * repairs:
 * - id: uuid
 * - user_id: uuid
 * - device_model: string
 * - issue_description: text
 * - status: string
 * - cost_estimate: number
 * - cost_final: number
 * - created_at: timestamp
 * - completed_at: timestamp
 */

import { supabase } from './client';

// Create repair request
export const createRepairRequest = async (repairData: any) => {
  try {
    const { data, error } = await supabase
      .from('repairs')
      .insert([repairData])
      .select();

    if (error) throw error;
    return { data, success: true };
  } catch (error) {
    console.error('Create repair error:', error);
    return { error, success: false, data: null };
  }
};

// Fetch repair history
export const fetchRepairHistory = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('repairs')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { data, success: true };
  } catch (error) {
    console.error('Fetch repairs error:', error);
    return { error, success: false, data: null };
  }
};

// Update repair status
export const updateRepairStatus = async (repairId: string, status: string) => {
  try {
    const { data, error } = await supabase
      .from('repairs')
      .update({ status, updated_at: new Date() })
      .eq('id', repairId)
      .select();

    if (error) throw error;
    return { data, success: true };
  } catch (error) {
    console.error('Update repair error:', error);
    return { error, success: false, data: null };
  }
};
