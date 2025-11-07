# 🚀 Render Deployment Guide

Complete step-by-step guide to deploy the Full Body Workout Tracker to Render (100% Free).

## 📋 Prerequisites

- GitHub account
- Render account (sign up at [render.com](https://render.com))
- Your code pushed to GitHub
- **No credit card required!** ✅

---

## 🚀 Deployment Steps

### Step 1: Push Your Code to GitHub

Make sure all your latest changes are committed and pushed:

```bash
git checkout main
git merge claude/pointed-you-011CUtZW4KNExNj2w2UoikxV
git push origin main
```

### Step 2: Create Render Account

1. Go to [render.com](https://render.com)
2. Click "Get Started" or "Sign Up"
3. Select "Sign up with GitHub"
4. Authorize Render to access your repositories
5. **No credit card required!**

### Step 3: Create PostgreSQL Database

**Create database FIRST (before web service):**

1. From Render Dashboard, click "New +"
2. Select "PostgreSQL"
3. Fill in details:
   - **Name**: `fullbodyworkout-db`
   - **Database**: `fullbodyworkout`
   - **User**: `fullbodyworkout` (auto-filled)
   - **Region**: Choose closest to you
   - **Instance Type**: **Free** ✅
4. Click "Create Database"
5. Wait 1-2 minutes for provisioning

**Important:** Copy the **Internal Database URL** - you'll need it next!
- Click on your database
- Find "Internal Database URL"
- Click "Copy" icon (looks like: `postgresql://...`)

### Step 4: Create Web Service

1. From Render Dashboard, click "New +"
2. Select "Web Service"
3. Click "Build and deploy from a Git repository"
4. Connect your GitHub account (if not already)
5. Find and select your repository: `fullbodyworkout`
6. Click "Connect"

### Step 5: Configure Web Service

Fill in the configuration:

**Basic Settings:**
- **Name**: `fullbodyworkout` (or your preferred name)
- **Region**: Same as your database
- **Branch**: `main`
- **Root Directory**: Leave blank
- **Runtime**: `Node`

**Build & Deploy:**
- **Build Command**:
  ```
  npm install && npm run build
  ```
- **Start Command**:
  ```
  npm run start
  ```

**Instance Type:**
- Select **Free** ✅

### Step 6: Add Environment Variables

Scroll down to **Environment Variables** section:

Click "Add Environment Variable" and add:

1. **DATABASE_URL**
   - Key: `DATABASE_URL`
   - Value: Paste the **Internal Database URL** you copied earlier
   - Example: `postgresql://fullbodyworkout:xxxxx@dpg-xxxxx-a.oregon-postgres.render.com/fullbodyworkout`

2. **NODE_ENV**
   - Key: `NODE_ENV`
   - Value: `production`

### Step 7: Deploy!

1. Scroll to bottom
2. Click "Create Web Service"
3. Render will start building your app
4. Watch the logs in real-time
5. First build takes 3-5 minutes

**Wait for:** "Your service is live 🎉"

### Step 8: Run Database Migration

After first deployment succeeds:

**Option A: Using Render Shell (Recommended)**
1. Go to your web service dashboard
2. Click "Shell" tab (top navigation)
3. Wait for shell to connect
4. Run migration:
   ```bash
   npm run db:push
   ```
5. Wait for "Changes applied" ✅

**Option B: Temporary Start Command**
1. Go to "Settings" tab
2. Find "Start Command"
3. Temporarily change to:
   ```
   npm run db:push && npm run start
   ```
4. Click "Save Changes"
5. Render will redeploy
6. After success, change back to: `npm run start`

### Step 9: Get Your Public URL

1. Your app URL is shown at the top of the dashboard
2. Format: `https://fullbodyworkout.onrender.com`
3. Click the URL to open your app!
4. **Bookmark it** - this is your live app! 🎉

---

## 🔧 Advanced Configuration

### Custom Domain Setup

1. Go to your web service → "Settings"
2. Scroll to "Custom Domain"
3. Click "Add Custom Domain"
4. Enter your domain: `workout.yourdomain.com`
5. Add the CNAME record to your DNS provider:
   ```
   CNAME: workout → fullbodyworkout.onrender.com
   ```
6. Render auto-provisions SSL certificate

### Using Blueprint (render.yaml)

Your project includes `render.yaml` for infrastructure-as-code:

1. Go to Render Dashboard
2. Click "New +" → "Blueprint"
3. Connect your repository
4. Render auto-detects `render.yaml`
5. Click "Apply" - creates everything automatically!

**Benefits:**
- One-click setup
- Database + Web service together
- Auto-links environment variables
- Version controlled infrastructure

### Environment-Specific Settings

For staging environment:

1. Create another web service
2. Use branch: `staging`
3. Connect to same database OR create staging DB
4. Different environment variables

---

## 📊 Monitoring & Maintenance

### View Logs

1. Go to your web service
2. Click "Logs" tab
3. Real-time log streaming
4. Filter by:
   - Deploy logs
   - Runtime logs
   - All logs

### Monitor Performance

1. Click "Metrics" tab
2. View:
   - CPU usage
   - Memory usage
   - Request count
   - Response times

### Health Checks

Render automatically pings your app:
- Path: `/` (configured in render.yaml)
- Frequency: Every 60 seconds
- Restarts if unhealthy

---

## 🆓 Free Tier Details

**Web Service Free Tier:**
- ✅ 750 hours/month (enough for 24/7)
- ✅ 512 MB RAM
- ✅ Shared CPU
- ✅ Custom domain + SSL
- ⚠️ **Spins down after 15 minutes of inactivity**
- ⚠️ **Cold start: ~30-60 seconds to wake**

**PostgreSQL Free Tier:**
- ✅ 1 GB storage
- ✅ Expires after 90 days (auto-deleted)
- ⚠️ For production, upgrade to paid ($7/month)

**Important Notes:**
- Free web services sleep after 15min inactivity
- First request after sleep takes 30-60s (cold start)
- Database free tier is temporary (90 days)
- No credit card needed for free tier

---

## 🐛 Troubleshooting

### Build Fails

**Check build logs:**
1. Go to "Logs" tab
2. Select "Deploy" filter
3. Look for error messages

**Common issues:**
```
Error: Cannot find module 'xyz'
→ Solution: Add to package.json dependencies

Build command failed
→ Solution: Check build command in Settings

Out of memory
→ Solution: Upgrade instance (paid tier needed)
```

### Database Connection Error

**Symptoms:**
- App crashes on startup
- Error: "DATABASE_URL environment variable is not set"

**Fix:**
1. Go to "Environment" tab
2. Verify `DATABASE_URL` exists
3. Check format: `postgresql://user:pass@host:port/db`
4. Get correct URL from database dashboard
5. Use **Internal Database URL** (not external)

**Test connection:**
```bash
# In Render Shell
psql $DATABASE_URL -c "SELECT 1"
```

### App Not Loading (Spinning Down)

**This is normal on free tier!**

Free services sleep after 15min inactivity:
- ✅ Expected behavior
- ⏱️ Takes 30-60s to wake up on first request
- 🔄 Stays awake while receiving requests

**To prevent (requires paid tier):**
1. Upgrade to Starter plan ($7/month)
2. Or use a cron job to ping every 10 minutes

### 500 Internal Server Error

**Debug steps:**
1. Check "Logs" tab for errors
2. Verify all environment variables set
3. Confirm database migration ran:
   ```bash
   # In Shell tab
   npm run db:push
   ```
4. Check database is running (green status)

### Slow Performance

**Free tier limitations:**
- Shared CPU
- 512 MB RAM
- Single region

**Solutions:**
- Optimize database queries
- Add indexes to frequently queried fields
- Upgrade to paid tier ($7/month for better performance)

---

## 🔄 Continuous Deployment

Render auto-deploys on every push to `main`:

```bash
# Make changes locally
git add .
git commit -m "Update feature"
git push origin main

# Render automatically:
# 1. Detects push
# 2. Builds new version
# 3. Deploys if build succeeds
# 4. No downtime (rolling deploy)
```

### Disable Auto-Deploy

1. Go to "Settings"
2. Find "Auto-Deploy"
3. Toggle off
4. Manual deploys: Click "Manual Deploy" button

### Deploy Specific Branch

1. Go to "Settings"
2. Find "Branch"
3. Change from `main` to your branch
4. Click "Save Changes"

---

## 💰 Cost Optimization Tips

### Stay Within Free Tier

1. **Accept cold starts** - free tier sleeps after 15min
2. **Monitor usage** - check Metrics tab regularly
3. **Optimize builds** - remove unused dependencies
4. **Use free database wisely** - 1 GB limit

### When to Upgrade

**Upgrade to Starter ($7/month) if:**
- ❌ Cold starts hurt user experience
- ❌ Need more than 1 GB database storage
- ❌ Database needs to persist beyond 90 days
- ❌ Need background workers/cron jobs

**Paid tier benefits:**
- Always-on (no sleeping)
- Better performance
- More RAM/CPU
- Persistent database
- Background workers

---

## 🛠️ Useful Features

### Shell Access

1. Go to web service
2. Click "Shell" tab
3. Interactive terminal in your container
4. Run commands:
   ```bash
   # Check Node version
   node --version

   # Run migrations
   npm run db:push

   # Test database connection
   psql $DATABASE_URL -c "SELECT 1"
   ```

### Connect to Database

**Using psql (in Shell):**
```bash
psql $DATABASE_URL
```

**Using external client:**
1. Get "External Database URL" from database dashboard
2. Use with tools like:
   - TablePlus
   - pgAdmin
   - DBeaver
   - psql locally

### Secrets Management

1. Go to "Environment" tab
2. Click "Add Environment Variable"
3. Enable "Secret" toggle
4. Value is encrypted and hidden in logs

---

## 📚 Useful Commands & Shortcuts

### Quick Access URLs

```
Dashboard:     https://dashboard.render.com
Your Service:  https://dashboard.render.com/web/[service-id]
Your Database: https://dashboard.render.com/d/[db-id]
Live App:      https://[your-app].onrender.com
```

### Database Commands (in Shell)

```bash
# Connect to database
psql $DATABASE_URL

# List tables
psql $DATABASE_URL -c "\dt"

# Run migration
npm run db:push

# Check database size
psql $DATABASE_URL -c "SELECT pg_size_pretty(pg_database_size('fullbodyworkout'))"

# Backup database (export)
pg_dump $DATABASE_URL > backup.sql
```

---

## ✅ Post-Deployment Checklist

- [ ] Web service deployed successfully
- [ ] Database created and connected
- [ ] Migrations completed (`npm run db:push`)
- [ ] App accessible via Render URL
- [ ] All features working correctly
- [ ] Environment variables verified
- [ ] Logs show no errors
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active (auto)

---

## 🎉 Success!

Your Full Body Workout Tracker is now live on Render!

**Your app URL:** `https://[your-app-name].onrender.com`

### Next Steps

1. **Test thoroughly** - Try all features
2. **Share your app** - Send the URL to users
3. **Monitor usage** - Check Metrics tab
4. **Plan for growth**:
   - Free tier: Good for personal use, demos
   - Paid tier: Needed for production traffic

### Important Reminders

⚠️ **Free Tier Limitations:**
- Services sleep after 15min inactivity (30-60s wake time)
- Database expires after 90 days
- 1 GB database storage limit

💡 **For Production:**
- Upgrade database to paid ($7/month) for persistence
- Consider Starter plan for always-on service
- Set up monitoring and alerts

---

## 📖 Additional Resources

- **Render Docs**: [render.com/docs](https://render.com/docs)
- **PostgreSQL Guide**: [render.com/docs/databases](https://render.com/docs/databases)
- **Troubleshooting**: [render.com/docs/troubleshooting-deploys](https://render.com/docs/troubleshooting-deploys)
- **Community**: [community.render.com](https://community.render.com)
- **Status Page**: [status.render.com](https://status.render.com)

---

## 🆘 Getting Help

**If you run into issues:**

1. Check "Logs" tab for errors
2. Review this troubleshooting guide
3. Search Render docs
4. Ask in Render Community forum
5. Contact Render support (Dashboard → Help)

---

## 📝 Quick Reference

| Task | Location |
|------|----------|
| Deploy | `git push origin main` |
| View logs | Logs tab |
| Run migrations | Shell tab → `npm run db:push` |
| Environment vars | Environment tab |
| Custom domain | Settings → Custom Domain |
| Database URL | Database dashboard → Internal URL |
| Service settings | Settings tab |
| Redeploy | Manual Deploy button |

---

**Happy deploying! 🚀**
