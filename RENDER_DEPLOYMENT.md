# Render Static Site Deployment

Quick guide for deploying to Render as a static site.

## Prerequisites

- Supabase project set up (see SUPABASE_SETUP.md)
- GitHub repository connected to Render
- Environment variables ready

## Deployment Configuration

### Build Settings

```
Build Command: npm run build
Publish Directory: dist
```

### Environment Variables

Add these in Render Dashboard → Environment:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Branch to Deploy

```
claude/migrate-render-supabase-01EHhFDaKCFv79ayo2jP9CXY
```

(or your preferred branch)

## Deployment Steps

1. **Create Static Site**
   - Go to [render.com](https://render.com)
   - New+ → Static Site
   - Connect your repo

2. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Branch: Your branch name

3. **Add Environment Variables**
   - Go to Environment tab
   - Add both VITE_SUPABASE_* variables

4. **Deploy**
   - Click "Create Static Site"
   - Wait 2-3 minutes for build

## Auto-Deploy

Render automatically deploys when you push to your connected branch.

## Build Time

Typical build: 1-2 minutes

## Custom Domain

1. Go to Static Site settings
2. Custom Domains → Add Custom Domain
3. Follow DNS configuration instructions

## Troubleshooting

**Build fails:**
- Check logs in Render dashboard
- Verify package.json scripts
- Ensure all dependencies are in package.json

**App loads but data doesn't work:**
- Check environment variables are set
- Verify Supabase URL and key are correct
- Check browser console for errors

**App shows blank page:**
- Check browser console for errors
- Verify build completed successfully
- Check network tab for failed requests

## Monitoring

- View deployment history in Render dashboard
- Check bandwidth usage (free tier: 100 GB/month)
- Monitor build times and failures

## Cost

**Free Tier:**
- 100 GB bandwidth/month
- Unlimited static sites
- Auto-deploy from Git
- CDN included
- Sleeps after 15 minutes of inactivity

**Paid ($7/month):**
- Always-on (no sleep)
- More bandwidth
- Priority support

For a personal workout tracker, **free tier is sufficient**.
