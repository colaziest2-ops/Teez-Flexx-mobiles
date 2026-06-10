import { createClient } from '@supabase/supabase-js';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

/**
 * Supabase Client Setup
 * 
 * This file initializes the Supabase client for frontend use.
 * It uses the public (anon) key for client-side operations.
 * 
 * Usage:
 * import { supabase } from '@/lib/supabase/client';
 * 
 * // Example: Fetch products
 * const { data, error } = await supabase
 *   .from('products')
 *   .select('*');
 * 
 * Features available through supabase client:
 * - Authentication (auth)
 * - Database queries (from/select/insert/update/delete)
 * - Real-time subscriptions
 * - Storage (file uploads)
 */
