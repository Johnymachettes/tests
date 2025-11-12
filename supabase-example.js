const { createClient } = require('@supabase/supabase-js');

/**
 * Example: How to connect to Supabase with real credentials
 *
 * To use this example:
 * 1. Get your Supabase credentials from: https://app.supabase.com/project/_/settings/api
 * 2. Create a .env file with:
 *    SUPABASE_URL=your_project_url
 *    SUPABASE_ANON_KEY=your_anon_key
 * 3. Uncomment the code below and run: node supabase-example.js
 */

// Uncomment to use environment variables
// require('dotenv').config();
// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_ANON_KEY;

// Or set them directly (not recommended for production)
const supabaseUrl = 'YOUR_SUPABASE_URL_HERE';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY_HERE';

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

async function testSupabaseConnection() {
  console.log('Testing Supabase connection...\n');

  try {
    // Example 1: Query data from a table
    // const { data, error } = await supabase
    //   .from('your_table_name')
    //   .select('*')
    //   .limit(10);

    // if (error) throw error;
    // console.log('Data:', data);

    // Example 2: Insert data
    // const { data, error } = await supabase
    //   .from('your_table_name')
    //   .insert([
    //     { column1: 'value1', column2: 'value2' }
    //   ]);

    // Example 3: Authentication
    // const { data, error } = await supabase.auth.signUp({
    //   email: 'example@email.com',
    //   password: 'example-password',
    // });

    // Example 4: Storage
    // const { data, error } = await supabase
    //   .storage
    //   .from('bucket-name')
    //   .list();

    console.log('✓ Supabase client is ready to use!');
    console.log('✓ Uncomment the examples above to test real operations');

  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run the test
// testSupabaseConnection();

console.log('To test this example:');
console.log('1. Replace YOUR_SUPABASE_URL_HERE with your Supabase project URL');
console.log('2. Replace YOUR_SUPABASE_ANON_KEY_HERE with your anon key');
console.log('3. Uncomment testSupabaseConnection() at the bottom');
console.log('4. Uncomment one of the examples inside the function');
console.log('5. Run: node supabase-example.js');
