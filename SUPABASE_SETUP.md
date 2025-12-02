# Supabase Setup Guide

This guide will help you migrate your workout tracker app from Replit to Supabase + Render Static Site.

## Overview

The app has been converted from a full-stack Express application to a **serverless static application** that uses Supabase as the backend.

### Architecture Changes

**Before:**
```
React → Express API → Drizzle ORM → Replit PostgreSQL
```

**After:**
```
React (Static) → Supabase JS Client → Supabase PostgreSQL
```

## Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Fill in project details:
   - **Name**: fullbodyworkout (or your preferred name)
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose closest to your users
   - **Plan**: Free tier is sufficient for personal use
4. Wait for project to finish setting up (2-3 minutes)

## Step 2: Get Supabase Credentials

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (under "Project API keys")

## Step 3: Import Your Database

You have an SQL backup at `backups/workout_tracker_backup_20251201_193606.sql`

### Option A: Using Supabase SQL Editor (Recommended)

1. In Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Open your SQL backup file and copy the contents
4. **Important**: Remove or comment out these lines from the top of the file:
   ```sql
   \restrict ...
   ```
   And from the bottom:
   ```sql
   \unrestrict ...
   ```
5. Paste the modified SQL into the editor
6. Click "Run" to execute

### Option B: Using PostgreSQL Command Line

```bash
# Get your database connection string from Supabase Settings → Database
# Connection string format: postgres://postgres:[PASSWORD]@[HOST]:5432/postgres

psql "your-connection-string-here" < backups/workout_tracker_backup_20251201_193606.sql
```

## Step 4: Configure Environment Variables Locally

1. Create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

## Step 5: Install Dependencies

```bash
npm install
```

This will install the new `@supabase/supabase-js` dependency and remove old server dependencies.

## Step 6: Test Locally

```bash
npm run dev
```

The app should now run on `http://localhost:5173` and connect to Supabase!

**Test these features:**
- ✅ View weeks and days
- ✅ Add workout weights
- ✅ Mark workouts as complete
- ✅ View progress page
- ✅ View exercise history

## Step 7: Deploy to Render

### Create Static Site on Render

1. Go to [https://render.com](https://render.com) and sign up/login
2. Click "New+" → "Static Site"
3. Connect your GitHub repository
4. Configure the site:
   - **Name**: fullbodyworkout (or your choice)
   - **Branch**: `claude/migrate-render-supabase-01EHhFDaKCFv79ayo2jP9CXY` (or your branch)
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

5. Add Environment Variables:
   - Click "Environment" tab
   - Add:
     - `VITE_SUPABASE_URL` = your Supabase project URL
     - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key

6. Click "Create Static Site"

Render will build and deploy your app! It usually takes 2-3 minutes.

## Step 8: Set Up Custom Domain (Optional)

In Render dashboard:
1. Go to your static site settings
2. Click "Custom Domains"
3. Add your domain and follow DNS instructions

## Verify Database Tables

Your Supabase database should have these tables:

### `completions`
- `id` (integer, primary key)
- `week` (integer)
- `day` (integer)
- Unique constraint on (`week`, `day`)

### `exercise_weights`
- `id` (integer, primary key)
- `week` (integer)
- `day` (integer)
- `exercise_name` (text)
- `weight` (numeric)
- Unique constraint on (`week`, `day`, `exercise_name`)

## Row Level Security (RLS)

For a personal single-user app, you can disable RLS on these tables:

```sql
ALTER TABLE completions DISABLE ROW LEVEL SECURITY;
ALTER TABLE exercise_weights DISABLE ROW LEVEL SECURITY;
```

**For multi-user apps**, you should enable RLS and create policies. Contact me if you need help with this.

## Troubleshooting

### "Missing Supabase environment variables" error
- Make sure `.env` file exists and has correct values
- Restart the dev server after adding env vars
- For Render, check Environment Variables in settings

### "Failed to fetch completions" error
- Verify Supabase project URL is correct
- Check that your anon key is valid
- Ensure tables were created successfully (check Supabase Table Editor)

### Build fails on Render
- Check build logs for specific error
- Verify environment variables are set in Render dashboard
- Ensure `package.json` build script is `vite build`

## Cost Comparison

| Service | Old (Replit) | New (Supabase + Render) |
|---------|--------------|-------------------------|
| **Hosting** | ~$20/month | Free (or $7/month always-on) |
| **Database** | Included | Free (500MB, 2GB bandwidth) |
| **Total** | ~$20/month | **Free** or ~$7/month |

## Support

If you encounter issues:
1. Check browser console for errors
2. Check Supabase logs (Supabase Dashboard → Logs)
3. Check Render deployment logs

## Next Steps

- ✅ App is now serverless and deployed!
- Consider adding authentication (Supabase Auth) if you want multiple users
- Set up automatic backups in Supabase
- Monitor usage in Supabase dashboard
