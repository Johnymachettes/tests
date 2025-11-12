const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Quick setup - replace these or add to .env file
const supabaseUrl = process.env.SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

const supabase = createClient(supabaseUrl, supabaseKey);

// ============================================
// QUICK START: Login and Query Data
// ============================================
async function quickStart() {
  try {
    console.log('=== Supabase Quick Start ===\n');

    // STEP 1: Sign in with email/password
    console.log('Step 1: Signing in...');
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: 'your-email@example.com',
      password: 'your-password',
    });

    if (authError) {
      console.error('Login failed:', authError.message);
      console.log('\nTo sign up first, use: supabase.auth.signUp()');
      return;
    }

    console.log('✓ Logged in as:', authData.user.email);
    console.log('✓ User ID:', authData.user.id);

    // STEP 2: Query data from a table
    console.log('\nStep 2: Querying data...');
    const { data: tableData, error: queryError } = await supabase
      .from('your_table_name')  // Replace with your table name
      .select('*')
      .limit(10);

    if (queryError) {
      console.error('Query failed:', queryError.message);
      return;
    }

    console.log('✓ Data retrieved:', tableData);

    // STEP 3: Insert data (example)
    console.log('\nStep 3: Inserting data...');
    const { data: insertData, error: insertError } = await supabase
      .from('your_table_name')
      .insert([
        { column1: 'value1', column2: 'value2' }  // Replace with your columns
      ])
      .select();

    if (insertError) {
      console.error('Insert failed:', insertError.message);
      return;
    }

    console.log('✓ Data inserted:', insertData);

    // STEP 4: Update data (example)
    console.log('\nStep 4: Updating data...');
    const { data: updateData, error: updateError } = await supabase
      .from('your_table_name')
      .update({ column1: 'new_value' })
      .eq('id', 1)  // Update where id = 1
      .select();

    if (updateError) {
      console.error('Update failed:', updateError.message);
      return;
    }

    console.log('✓ Data updated:', updateData);

    // STEP 5: Delete data (example)
    console.log('\nStep 5: Deleting data...');
    const { error: deleteError } = await supabase
      .from('your_table_name')
      .delete()
      .eq('id', 1);  // Delete where id = 1

    if (deleteError) {
      console.error('Delete failed:', deleteError.message);
      return;
    }

    console.log('✓ Data deleted successfully');

    console.log('\n=== All operations completed! ===');

  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

// Run the quick start
// Uncomment the line below after setting your credentials
// quickStart();

console.log('📝 Quick Setup Instructions:\n');
console.log('1. Get your credentials from: https://app.supabase.com/project/_/settings/api');
console.log('2. Create a .env file with:');
console.log('   SUPABASE_URL=https://your-project.supabase.co');
console.log('   SUPABASE_ANON_KEY=your-anon-key');
console.log('3. Or replace the values directly in this file');
console.log('4. Uncomment quickStart() at the bottom');
console.log('5. Run: node supabase-quickstart.js\n');
