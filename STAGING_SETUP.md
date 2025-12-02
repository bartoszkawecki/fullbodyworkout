# Staging Environment Setup Guide

This guide will help you set up a **STAGING environment** for the Full Body Workout app using Render (Static Site) and Supabase (Database).

## Overview

The staging environment serves as a testing ground for new features before deploying to production. It mirrors your production setup but operates independently.

### Architecture

```
React App (Static) → Supabase JS Client → Supabase PostgreSQL (Staging)
     ↓
Render Static Site (Staging)
```

## Quick Start Checklist

- [ ] Create Supabase staging project
- [ ] Import database schema
- [ ] Get Supabase credentials
- [ ] Create Render static site (staging)
- [ ] Configure environment variables
- [ ] Deploy and test

---

## Step 1: Create Supabase Staging Project

1. Go to [https://supabase.com](https://supabase.com) and sign in
2. Click **"New Project"**
3. Fill in project details:
   - **Name**: `fullbodyworkout-staging`
   - **Database Password**: Create a strong password (save it securely!)
   - **Region**: Choose closest to your users
   - **Plan**: Free tier (sufficient for staging)
4. Click **"Create new project"**
5. Wait 2-3 minutes for setup to complete

---

## Step 2: Set Up Database Schema

### Option A: SQL Editor (Recommended)

1. In your Supabase staging project, go to **SQL Editor**
2. Click **"New Query"**
3. Copy and paste this schema:

```sql
-- Create completions table
CREATE TABLE IF NOT EXISTS completions (
  id SERIAL PRIMARY KEY,
  week INTEGER NOT NULL,
  day INTEGER NOT NULL,
  UNIQUE(week, day)
);

-- Create exercise_weights table
CREATE TABLE IF NOT EXISTS exercise_weights (
  id SERIAL PRIMARY KEY,
  week INTEGER NOT NULL,
  day INTEGER NOT NULL,
  exercise_name TEXT NOT NULL,
  weight NUMERIC NOT NULL,
  UNIQUE(week, day, exercise_name)
);

-- Disable Row Level Security for single-user app
ALTER TABLE completions DISABLE ROW LEVEL SECURITY;
ALTER TABLE exercise_weights DISABLE ROW LEVEL SECURITY;
```

4. Click **"Run"** to execute the SQL

### Option B: Import from Existing Backup

If you want to copy data from production:

1. Use the SQL file at `backups/supabase_import_insert.sql`
2. Open it in your editor
3. Copy the contents
4. Paste into **SQL Editor** in your Supabase staging project
5. Click **"Run"**

---

## Step 3: Get Supabase Credentials

1. In your Supabase staging project, go to **Settings** → **API**
2. Copy these two values:
   - **Project URL** (example: `https://abcdefgh.supabase.co`)
   - **anon/public key** (under "Project API keys" section)

3. Save these credentials - you'll need them for Render and local testing

---

## Step 4: Create Render Static Site (Staging)

1. Go to [https://render.com](https://render.com) and sign in
2. Click **"New +"** → **"Static Site"**
3. Connect your GitHub repository if not already connected
4. Configure the static site:

   **Basic Settings:**
   - **Name**: `fullbodyworkout-staging`
   - **Branch**: `claude/staging-render-setup-017xZP8Updzg7tmxwuMrPPge`
   - **Root Directory**: (leave empty)

   **Build Settings:**
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

5. Click **"Advanced"** and add these **Environment Variables**:
   - `VITE_SUPABASE_URL` = Your staging Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` = Your staging Supabase anon key

6. Click **"Create Static Site"**

Render will now build and deploy your staging app! This takes about 2-3 minutes.

---

## Step 5: Verify Deployment

1. Once the build completes, Render will provide a URL like:
   `https://fullbodyworkout-staging.onrender.com`

2. Open the URL in your browser

3. Test these features:
   - [ ] App loads without errors
   - [ ] Navigate to different weeks
   - [ ] View workout days
   - [ ] Add exercise weights
   - [ ] Mark workouts as complete
   - [ ] View progress page
   - [ ] View exercise history

4. Check browser console (F12) for any errors

---

## Step 6: Local Development with Staging

To test staging environment locally:

1. Create a `.env.staging` file in the project root:

```bash
cp .env.example .env.staging
```

2. Edit `.env.staging` and add your **STAGING** Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-staging-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-staging-anon-key
```

3. Run the dev server:

```bash
npm run dev
```

4. Test the app at `http://localhost:5173`

---

## Auto-Deploy Configuration

Render automatically deploys when you push to the connected branch (`claude/staging-render-setup-017xZP8Updzg7tmxwuMrPPge`).

### Workflow:

1. Make changes to your code
2. Commit and push to staging branch:
   ```bash
   git add .
   git commit -m "Your change description"
   git push -u origin claude/staging-render-setup-017xZP8Updzg7tmxwuMrPPge
   ```
3. Render automatically builds and deploys
4. Check deployment status in Render dashboard
5. Test the changes on your staging URL

---

## Staging vs Production

| Aspect | Staging | Production |
|--------|---------|------------|
| **Purpose** | Testing new features | Live user environment |
| **Supabase Project** | `fullbodyworkout-staging` | `fullbodyworkout` |
| **Render Site** | `fullbodyworkout-staging` | `fullbodyworkout` |
| **Git Branch** | `claude/staging-render-setup-*` | `main` or dedicated prod branch |
| **Data** | Test data / Copy of prod | Real user data |
| **Updates** | Frequent (testing) | Controlled (after staging approval) |

---

## Environment Variables Summary

Create separate credential sets for staging and production:

**Staging (.env.staging):**
```env
VITE_SUPABASE_URL=https://staging-xxx.supabase.co
VITE_SUPABASE_ANON_KEY=staging-anon-key
```

**Production (.env.production):**
```env
VITE_SUPABASE_URL=https://prod-xxx.supabase.co
VITE_SUPABASE_ANON_KEY=prod-anon-key
```

---

## Troubleshooting

### Build Fails on Render

**Check:**
- Environment variables are set correctly in Render dashboard
- Branch name matches exactly
- Build logs for specific error messages

**Solution:**
- Verify `package.json` has correct scripts
- Ensure all dependencies are listed in `package.json`
- Check Render logs for detailed error info

### App Loads but No Data

**Check:**
- Supabase URL and key are correct in Render env vars
- Tables were created in Supabase
- RLS is disabled (for single-user app)

**Solution:**
- Test Supabase connection from SQL Editor
- Verify table names match exactly: `completions`, `exercise_weights`
- Check browser console for API errors

### Database Connection Errors

**Check:**
- Supabase project is active (not paused)
- API keys are from the correct staging project
- Network tab in browser dev tools

**Solution:**
- Copy credentials again from Supabase dashboard
- Ensure you're using the anon/public key (not service role key)
- Check Supabase project status

---

## Cost Breakdown (Free Tier)

### Render Static Site
- **Free Tier Includes:**
  - 100 GB bandwidth/month
  - Unlimited static sites
  - Auto-deploy from Git
  - Global CDN
  - SSL certificates
- **Limitation:** Sites sleep after 15 minutes of inactivity (only for backend services, not static sites)
- **Cost:** **FREE**

### Supabase Database
- **Free Tier Includes:**
  - 500 MB database storage
  - 2 GB bandwidth/month
  - 50 MB file storage
  - Unlimited API requests
  - Automatic backups (7 days)
- **Cost:** **FREE**

### Total Monthly Cost: $0

**Note:** For production, consider upgrading for:
- Render: $7/month (always-on, more bandwidth)
- Supabase: $25/month (8 GB database, 250 GB bandwidth, daily backups)

---

## Next Steps After Staging Setup

1. **Test thoroughly** in staging before promoting to production
2. **Create production environment** following the same steps
3. **Set up CI/CD pipeline** (optional) for automated testing
4. **Configure custom domain** for production (in Render settings)
5. **Set up monitoring** using Render and Supabase dashboards
6. **Enable Supabase backups** (automatic on free tier)

---

## Useful Commands

```bash
# Start local dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type check
npm run check

# View git branches
git branch -a

# Push to staging
git push -u origin claude/staging-render-setup-017xZP8Updzg7tmxwuMrPPge
```

---

## Support Resources

- **Render Documentation**: [https://render.com/docs/static-sites](https://render.com/docs/static-sites)
- **Supabase Documentation**: [https://supabase.com/docs](https://supabase.com/docs)
- **This Repo's Guides**:
  - `MIGRATION_SUMMARY.md` - Overview of architecture changes
  - `RENDER_DEPLOYMENT.md` - Render-specific deployment guide
  - `SUPABASE_SETUP.md` - Supabase configuration guide

---

## Security Best Practices

1. **Never commit `.env` files** - They're in `.gitignore` for a reason
2. **Use separate Supabase projects** for staging and production
3. **Keep anon keys public, service role keys private**
4. **Enable RLS** if you add multi-user authentication
5. **Regularly rotate database passwords**
6. **Monitor Supabase logs** for suspicious activity
7. **Use HTTPS only** (Render provides this automatically)

---

Happy staging! 🚀

Need help? Check the other markdown files in this repo for more detailed information.
