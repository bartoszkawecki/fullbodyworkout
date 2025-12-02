# Supabase Staging Environment Setup

Complete guide to setting up Supabase for your staging environment.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Create Staging Project](#create-staging-project)
3. [Set Up Database Schema](#set-up-database-schema)
4. [Configure Security](#configure-security)
5. [Get API Credentials](#get-api-credentials)
6. [Import Sample Data (Optional)](#import-sample-data-optional)
7. [Test Connection](#test-connection)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- [ ] Supabase account ([sign up free](https://supabase.com))
- [ ] This repository cloned locally
- [ ] Basic understanding of SQL (helpful but not required)

---

## Create Staging Project

### Step 1: Log in to Supabase

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Sign in"** or **"Start your project"**
3. Sign in with GitHub, Google, or email

### Step 2: Create New Project

1. Click **"New project"** button (top right or center)
2. Fill in the project details:

   **Organization**: Select or create one

   **Project Name**: `fullbodyworkout-staging`

   **Database Password**:
   - Generate a strong password
   - **IMPORTANT:** Save this password securely
   - You'll need it for direct database access (though not for the app)

   **Region**:
   - Choose the region closest to your users
   - Suggested: `East US (North Virginia)` for US-based users
   - Or: `Central EU (Frankfurt)` for EU-based users

   **Pricing Plan**:
   - Select **"Free"** (sufficient for staging)
   - Free tier includes:
     - 500 MB database storage
     - 2 GB bandwidth/month
     - Unlimited API requests
     - 7-day automatic backups

3. Click **"Create new project"**

4. Wait 2-3 minutes while Supabase provisions your database

---

## Set Up Database Schema

Once your project is ready, set up the database tables.

### Step 1: Open SQL Editor

1. In your Supabase project dashboard, look at the left sidebar
2. Click on **"SQL Editor"** icon (looks like a document with code)
3. Click **"New query"** button (top right)

### Step 2: Create Tables

Copy and paste this SQL schema into the editor:

```sql
-- ==================================================
-- Full Body Workout App - Database Schema (Staging)
-- ==================================================

-- Table: completions
-- Stores which workouts (week/day combinations) are completed
CREATE TABLE IF NOT EXISTS completions (
  id SERIAL PRIMARY KEY,
  week INTEGER NOT NULL,
  day INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(week, day)
);

-- Table: exercise_weights
-- Stores the weight used for each exercise in each workout
CREATE TABLE IF NOT EXISTS exercise_weights (
  id SERIAL PRIMARY KEY,
  week INTEGER NOT NULL,
  day INTEGER NOT NULL,
  exercise_name TEXT NOT NULL,
  weight NUMERIC NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(week, day, exercise_name)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_completions_week_day ON completions(week, day);
CREATE INDEX IF NOT EXISTS idx_exercise_weights_week_day ON exercise_weights(week, day);
CREATE INDEX IF NOT EXISTS idx_exercise_weights_name ON exercise_weights(exercise_name);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to update updated_at on exercise_weights
DROP TRIGGER IF EXISTS update_exercise_weights_updated_at ON exercise_weights;
CREATE TRIGGER update_exercise_weights_updated_at
    BEFORE UPDATE ON exercise_weights
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
```

### Step 3: Run the Query

1. Click the **"Run"** button (bottom right of the SQL editor)
2. You should see a success message
3. If you see any errors, check the [Troubleshooting](#troubleshooting) section

### Step 4: Verify Tables

1. In the left sidebar, click **"Table Editor"**
2. You should see two tables:
   - `completions`
   - `exercise_weights`
3. Click on each table to see its columns

---

## Configure Security

For a single-user staging app, we'll disable Row Level Security (RLS). For production or multi-user apps, you should enable RLS with proper policies.

### Disable RLS for Staging

1. Go back to **SQL Editor**
2. Click **"New query"**
3. Paste this SQL:

```sql
-- Disable Row Level Security for single-user staging environment
-- WARNING: Do not use this in production with multiple users!

ALTER TABLE completions DISABLE ROW LEVEL SECURITY;
ALTER TABLE exercise_weights DISABLE ROW LEVEL SECURITY;
```

4. Click **"Run"**

### (Optional) Enable RLS for Multi-User Setup

If you plan to add authentication and multiple users:

```sql
-- Enable RLS
ALTER TABLE completions ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercise_weights ENABLE ROW LEVEL SECURITY;

-- Add user_id column
ALTER TABLE completions ADD COLUMN user_id UUID REFERENCES auth.users(id);
ALTER TABLE exercise_weights ADD COLUMN user_id UUID REFERENCES auth.users(id);

-- Create policies (users can only see their own data)
CREATE POLICY "Users can view own completions"
  ON completions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own completions"
  ON completions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own completions"
  ON completions FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view own weights"
  ON exercise_weights FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own weights"
  ON exercise_weights FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own weights"
  ON exercise_weights FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own weights"
  ON exercise_weights FOR DELETE
  USING (auth.uid() = user_id);
```

---

## Get API Credentials

You need two pieces of information to connect your app to Supabase.

### Step 1: Navigate to API Settings

1. In the left sidebar, click **"Settings"** (gear icon at bottom)
2. Click **"API"** in the settings menu

### Step 2: Copy Project URL

1. Look for the **"Project URL"** section
2. You'll see a URL like: `https://abcdefghijk.supabase.co`
3. Click the **copy icon** next to it
4. Save this URL somewhere safe (you'll need it soon)

### Step 3: Copy Anon Key

1. Scroll down to **"Project API keys"**
2. Look for the **"anon" / "public"** key
3. This is a long string starting with `eyJ...`
4. Click the **copy icon** next to it
5. Save this key somewhere safe

**DO NOT USE THE SERVICE ROLE KEY!** The service role key bypasses all security and should never be used in client-side applications.

---

## Import Sample Data (Optional)

If you want to test with sample data or migrate existing data:

### Option 1: Import from Backup File

If you have existing data to migrate:

1. Open `backups/supabase_import_insert.sql` from this repository
2. Copy the entire contents
3. Go to **SQL Editor** in Supabase
4. Click **"New query"**
5. Paste the SQL
6. Click **"Run"**

### Option 2: Add Sample Data Manually

Go to **SQL Editor** and run:

```sql
-- Sample workout completion data
INSERT INTO completions (week, day) VALUES
(1, 1),
(1, 2),
(1, 3);

-- Sample exercise weight data
INSERT INTO exercise_weights (week, day, exercise_name, weight) VALUES
(1, 1, 'Bench Press', 135),
(1, 1, 'Squat', 185),
(1, 1, 'Deadlift', 225),
(1, 2, 'Bench Press', 140),
(1, 2, 'Squat', 190);
```

### Option 3: No Sample Data

You can start with empty tables and add data through the app!

---

## Test Connection

Let's verify everything is working correctly.

### Method 1: Using Supabase Table Editor

1. Go to **Table Editor** in the left sidebar
2. Click on `completions` table
3. Try adding a row manually:
   - Click **"Insert"** → **"Insert row"**
   - Set `week` = 1
   - Set `day` = 1
   - Click **"Save"**
4. You should see the row appear in the table
5. Click the row and delete it (click **"Delete"** button)

### Method 2: Using SQL Editor

Run this test query:

```sql
-- Test inserting and querying
INSERT INTO completions (week, day) VALUES (99, 99);
SELECT * FROM completions WHERE week = 99;
DELETE FROM completions WHERE week = 99;
```

If all three statements execute successfully, your database is ready!

---

## Configure Local Development

Now connect your local app to the staging Supabase:

### Step 1: Create Environment File

In your project root:

```bash
cp .env.staging.example .env.staging
```

### Step 2: Add Your Credentials

Edit `.env.staging` and replace with your actual values:

```env
VITE_SUPABASE_URL=https://abcdefghijk.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 3: Test Locally

```bash
# Install dependencies (if not already done)
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser and test:

1. Navigate to a workout week
2. Try adding a weight for an exercise
3. Mark a workout as complete
4. Check if the data persists after refreshing the page

---

## Monitoring and Logs

### View Database Activity

1. Go to **Database** in the left sidebar
2. Click **"Logs"**
3. You can see:
   - Recent queries
   - Connection attempts
   - Errors

### View API Usage

1. Go to **Settings** → **Usage**
2. Monitor:
   - Database size
   - Bandwidth usage
   - API requests
   - Active connections

### Set Up Alerts (Optional)

1. Go to **Settings** → **Billing**
2. Set up email alerts for:
   - Storage limit approaching
   - Bandwidth limit approaching

---

## Troubleshooting

### Error: "relation already exists"

**Problem:** Table already exists

**Solution:**
- This is usually fine - the table is already created
- To recreate, first drop the table:
  ```sql
  DROP TABLE IF EXISTS completions CASCADE;
  DROP TABLE IF EXISTS exercise_weights CASCADE;
  ```
  Then run the schema creation again

### Error: "permission denied for table"

**Problem:** RLS is enabled and blocking queries

**Solution:**
- Make sure you ran the "Disable RLS" SQL:
  ```sql
  ALTER TABLE completions DISABLE ROW LEVEL SECURITY;
  ALTER TABLE exercise_weights DISABLE ROW LEVEL SECURITY;
  ```

### Error: "Invalid API key"

**Problem:** Wrong key or typo in `.env.staging`

**Solution:**
- Double-check you copied the **anon/public** key (not service role)
- Make sure there are no extra spaces or quotes
- Verify the key in Supabase **Settings → API**

### Error: "Failed to connect"

**Problem:** Project URL is incorrect

**Solution:**
- Verify the URL format: `https://xxxxx.supabase.co`
- No trailing slash
- Make sure your Supabase project is active (not paused)

### Database is Paused

**Problem:** Free tier projects pause after 7 days of inactivity

**Solution:**
- Go to your Supabase project
- Click **"Restore"** or **"Resume"**
- Wait 2-3 minutes for it to wake up

---

## Next Steps

✅ **Supabase staging environment is ready!**

Now proceed to:

1. **Configure Render** - See `STAGING_SETUP.md` Step 4
2. **Deploy to Render** - Push your code and auto-deploy
3. **Test staging app** - Verify everything works end-to-end
4. **Set up production** - Repeat process with a production Supabase project

---

## Security Best Practices

- ✅ **Never commit `.env` files** to git
- ✅ **Use separate Supabase projects** for staging and production
- ✅ **Keep database password secure** (stored in password manager)
- ✅ **Anon key is safe to expose** (it's meant for client-side use)
- ✅ **Service role key must stay secret** (never use in client-side code)
- ✅ **Enable RLS in production** if you have multiple users
- ✅ **Regularly check usage** to avoid hitting free tier limits
- ✅ **Set up backups** (automatic on Supabase free tier)

---

## Cost Breakdown

### Supabase Free Tier (Staging)

- **Database Storage:** 500 MB (more than enough for workout tracking)
- **Bandwidth:** 2 GB/month (plenty for staging testing)
- **API Requests:** Unlimited
- **Backups:** 7-day automatic backups
- **Cost:** **$0/month**

### When to Upgrade

Consider upgrading to Supabase Pro ($25/month) if:
- You exceed 500 MB storage
- You need more than 2 GB bandwidth
- You want daily backups (instead of 7-day retention)
- You need guaranteed 99.9% uptime SLA

For staging, **free tier is perfectly fine**.

---

## Useful SQL Queries

### View All Completions

```sql
SELECT * FROM completions ORDER BY week, day;
```

### View All Weights

```sql
SELECT * FROM exercise_weights ORDER BY week, day, exercise_name;
```

### Find Weights for Specific Exercise

```sql
SELECT * FROM exercise_weights
WHERE exercise_name = 'Bench Press'
ORDER BY week, day;
```

### Count Total Workouts Completed

```sql
SELECT COUNT(*) as total_completed FROM completions;
```

### See Highest Weight for Each Exercise

```sql
SELECT
  exercise_name,
  MAX(weight) as max_weight,
  MIN(weight) as min_weight,
  AVG(weight) as avg_weight
FROM exercise_weights
GROUP BY exercise_name
ORDER BY max_weight DESC;
```

### Clear All Data (Reset Staging)

```sql
DELETE FROM completions;
DELETE FROM exercise_weights;
```

---

## Support Resources

- **Supabase Documentation**: [https://supabase.com/docs](https://supabase.com/docs)
- **Supabase Discord**: [https://discord.supabase.com](https://discord.supabase.com)
- **SQL Tutorial**: [https://supabase.com/docs/guides/database](https://supabase.com/docs/guides/database)

---

Congratulations! Your Supabase staging environment is ready. 🎉

Continue with `STAGING_SETUP.md` to complete your full staging deployment.
