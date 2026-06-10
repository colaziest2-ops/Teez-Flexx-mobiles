import { supabase } from './client';

/**
 * Supabase Authentication Utilities
 * 
 * This file contains helper functions for authentication operations
 * integrated with Supabase Auth service.
 */

// Sign up with email and password
export const signUp = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    return { data, success: true };
  } catch (error) {
    console.error('Sign up error:', error);
    return { error, success: false };
  }
};

// Sign in with email and password
export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return { data, success: true };
  } catch (error) {
    console.error('Sign in error:', error);
    return { error, success: false };
  }
};

// Sign out
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Sign out error:', error);
    return { success: false, error };
  }
};

// Get current user
export const getCurrentUser = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data.user;
  } catch (error) {
    console.error('Get user error:', error);
    return null;
  }
};

// Reset password
export const resetPassword = async (email: string) => {
  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) throw error;
    return { data, success: true };
  } catch (error) {
    console.error('Reset password error:', error);
    return { error, success: false };
  }
};

// Update user password
export const updatePassword = async (password: string) => {
  try {
    const { data, error } = await supabase.auth.updateUser({
      password,
    });

    if (error) throw error;
    return { data, success: true };
  } catch (error) {
    console.error('Update password error:', error);
    return { error, success: false };
  }
};
