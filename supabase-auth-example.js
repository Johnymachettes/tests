const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Initialize Supabase client with your credentials
const supabaseUrl = process.env.SUPABASE_URL || 'https://your-project-id.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'your-anon-key-here';

const supabase = createClient(supabaseUrl, supabaseKey);

console.log('=== Supabase Authentication Examples ===\n');

// ============================================
// 1. Sign Up with Email/Password
// ============================================
async function signUpWithEmail(email, password) {
  console.log('1. Signing up new user...');
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.error('Error signing up:', error.message);
    return null;
  }

  console.log('✓ User signed up successfully!');
  console.log('User ID:', data.user?.id);
  console.log('Email:', data.user?.email);
  return data;
}

// ============================================
// 2. Sign In with Email/Password
// ============================================
async function signInWithEmail(email, password) {
  console.log('\n2. Signing in user...');
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    console.error('Error signing in:', error.message);
    return null;
  }

  console.log('✓ User signed in successfully!');
  console.log('Access Token:', data.session?.access_token.substring(0, 20) + '...');
  console.log('User:', data.user?.email);
  return data;
}

// ============================================
// 3. Get Current User Session
// ============================================
async function getCurrentUser() {
  console.log('\n3. Getting current user session...');
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error) {
    console.error('Error getting user:', error.message);
    return null;
  }

  if (user) {
    console.log('✓ Current user:', user.email);
    console.log('User ID:', user.id);
  } else {
    console.log('No user logged in');
  }

  return user;
}

// ============================================
// 4. Sign In with OAuth (Google, GitHub, etc.)
// ============================================
async function signInWithOAuth(provider = 'google') {
  console.log(`\n4. Signing in with ${provider}...`);
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider, // 'google', 'github', 'apple', 'azure', etc.
  });

  if (error) {
    console.error('Error with OAuth:', error.message);
    return null;
  }

  console.log('✓ OAuth URL generated. User should be redirected to:', data.url);
  return data;
}

// ============================================
// 5. Sign In with Magic Link (Passwordless)
// ============================================
async function signInWithMagicLink(email) {
  console.log('\n5. Sending magic link to:', email);
  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
  });

  if (error) {
    console.error('Error sending magic link:', error.message);
    return null;
  }

  console.log('✓ Magic link sent! Check your email.');
  return data;
}

// ============================================
// 6. Sign Out
// ============================================
async function signOut() {
  console.log('\n6. Signing out...');
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Error signing out:', error.message);
    return false;
  }

  console.log('✓ User signed out successfully!');
  return true;
}

// ============================================
// 7. Reset Password
// ============================================
async function resetPassword(email) {
  console.log('\n7. Sending password reset email to:', email);
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    console.error('Error sending reset email:', error.message);
    return null;
  }

  console.log('✓ Password reset email sent!');
  return data;
}

// ============================================
// 8. Update User Profile
// ============================================
async function updateUserProfile(updates) {
  console.log('\n8. Updating user profile...');
  const { data, error } = await supabase.auth.updateUser(updates);

  if (error) {
    console.error('Error updating profile:', error.message);
    return null;
  }

  console.log('✓ Profile updated successfully!');
  return data;
}

// ============================================
// Example Usage - Uncomment to test
// ============================================
async function main() {
  console.log('Starting Supabase authentication demo...\n');

  // Example 1: Sign up
  // await signUpWithEmail('test@example.com', 'yourpassword123');

  // Example 2: Sign in
  // await signInWithEmail('test@example.com', 'yourpassword123');

  // Example 3: Get current user
  // await getCurrentUser();

  // Example 4: OAuth (opens browser)
  // await signInWithOAuth('google');

  // Example 5: Magic link
  // await signInWithMagicLink('test@example.com');

  // Example 6: Sign out
  // await signOut();

  // Example 7: Reset password
  // await resetPassword('test@example.com');

  // Example 8: Update profile
  // await updateUserProfile({
  //   data: { username: 'newusername', display_name: 'New Name' }
  // });

  console.log('\n=== How to Use ===');
  console.log('1. Copy .env.example to .env');
  console.log('2. Add your Supabase URL and ANON_KEY to .env');
  console.log('3. Uncomment the examples above you want to test');
  console.log('4. Run: node supabase-auth-example.js');
}

// Listen for auth state changes
supabase.auth.onAuthStateChange((event, session) => {
  console.log('\n[Auth Event]:', event);
  if (session) {
    console.log('[Session] User:', session.user.email);
  }
});

// Run the main function
main().catch(console.error);
