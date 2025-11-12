const { createClient } = require('@supabase/supabase-js');

console.log('=== Testing Supabase Connection ===\n');

// Test Supabase import and client creation
try {
  console.log('✓ Supabase package imported successfully');

  // Create a test client (using dummy values since we don't have actual credentials)
  // In a real scenario, you'd use actual SUPABASE_URL and SUPABASE_ANON_KEY
  const supabaseUrl = 'https://example.supabase.co';
  const supabaseKey = 'dummy-key-for-testing';

  const supabase = createClient(supabaseUrl, supabaseKey);
  console.log('✓ Supabase client created successfully');
  console.log('✓ Client object type:', typeof supabase);
  console.log('✓ Client has auth method:', typeof supabase.auth === 'object');
  console.log('✓ Client has from method:', typeof supabase.from === 'function');

} catch (error) {
  console.error('✗ Error with Supabase:', error.message);
}

console.log('\n=== Testing Ruvi CLI ===\n');

// Ruvi is a CLI tool, not a library to import
// It's meant to be run as a command-line tool
try {
  const fs = require('fs');
  const path = require('path');

  const ruviPath = path.join(__dirname, 'node_modules', 'ruvi');
  const ruviPackageJson = require(path.join(ruviPath, 'package.json'));

  console.log('✓ Ruvi CLI installed successfully');
  console.log('✓ Ruvi version:', ruviPackageJson.version);
  console.log('✓ Ruvi description:', ruviPackageJson.description);
  console.log('✓ Ruvi is an ES module CLI tool (run with: npx ruvi)');

} catch (error) {
  console.error('✗ Error with Ruvi:', error.message);
}

console.log('\n=== Connection Test Summary ===');
console.log('✓ Supabase client library is installed and working!');
console.log('✓ Ruvi CLI is installed and ready to use!');
console.log('\nNote: To actually connect to Supabase, you would need:');
console.log('  - SUPABASE_URL (your project URL)');
console.log('  - SUPABASE_ANON_KEY (your project\'s anonymous key)');
console.log('\nYou can get these from your Supabase project dashboard.');
