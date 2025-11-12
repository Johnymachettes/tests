# Supabase & Ruvi CLI Test Project

This project demonstrates how to connect to Supabase and use Ruvi CLI.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up your Supabase credentials:
```bash
cp .env.example .env
```

3. Edit `.env` and add your Supabase credentials from: https://app.supabase.com/project/_/settings/api

## Files Overview

### Test Connection
- **test-connections.js** - Verifies both Supabase and Ruvi CLI are installed correctly
  ```bash
  node test-connections.js
  ```

### Supabase Authentication
- **supabase-auth-example.js** - Complete authentication examples including:
  - Email/Password Sign Up & Sign In
  - OAuth (Google, GitHub, etc.)
  - Magic Links (Passwordless)
  - Password Reset
  - User Profile Updates
  - Session Management

  ```bash
  node supabase-auth-example.js
  ```

### Quick Start
- **supabase-quickstart.js** - Simple example showing login and basic CRUD operations
  ```bash
  node supabase-quickstart.js
  ```

### Ruvi CLI
- **Ruvi CLI** - Agentic Engineering Console with MCP integration
  ```bash
  npx ruvi --help
  npx ruvi login
  npx ruvi console
  ```

## How to Login to Supabase (Without Ruvi CLI)

### Method 1: Email/Password

```javascript
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient('YOUR_URL', 'YOUR_ANON_KEY');

// Sign In
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123',
});

if (data.user) {
  console.log('Logged in!', data.user.email);
}
```

### Method 2: Magic Link (Passwordless)

```javascript
const { data, error } = await supabase.auth.signInWithOtp({
  email: 'user@example.com',
});
// User receives email with login link
```

### Method 3: OAuth (Google, GitHub, etc.)

```javascript
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
});
// Redirects user to Google login
```

## Common Operations

### Query Data
```javascript
const { data, error } = await supabase
  .from('table_name')
  .select('*');
```

### Insert Data
```javascript
const { data, error } = await supabase
  .from('table_name')
  .insert([{ column: 'value' }]);
```

### Update Data
```javascript
const { data, error } = await supabase
  .from('table_name')
  .update({ column: 'new_value' })
  .eq('id', 1);
```

### Delete Data
```javascript
const { error } = await supabase
  .from('table_name')
  .delete()
  .eq('id', 1);
```

## Get Your Supabase Credentials

1. Go to https://app.supabase.com
2. Select your project
3. Go to Settings → API
4. Copy your:
   - Project URL
   - `anon` `public` key

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript)
- [Ruvi CLI](https://www.npmjs.com/package/ruvi)
