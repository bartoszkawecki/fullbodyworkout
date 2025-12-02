# Free Database Alternatives for Staging

Since you've reached Supabase's free project limit, here are excellent free alternatives for your staging database.

## 🎯 Quick Comparison

| Provider | Type | Free Tier | Best For |
|----------|------|-----------|----------|
| **Neon** | Postgres | 10 GB storage, 3 projects | ⭐ Best Supabase alternative |
| **Turso** | SQLite | 9 GB storage, 1 billion row reads | ⭐ Easiest setup, very generous |
| **Railway** | Postgres | 500 MB, $5 credit/month | Good for staging |
| **CockroachDB** | Postgres | 10 GB storage | Similar to Postgres |
| **PlanetScale** | MySQL | 5 GB storage | Good but requires SQL changes |

---

## 🏆 RECOMMENDED: Neon (Postgres)

**Best choice for minimal code changes** - Drop-in Supabase replacement!

### Why Neon?

- ✅ Full Postgres compatibility (same as Supabase)
- ✅ Generous free tier: **10 GB storage** + **3 projects**
- ✅ Serverless architecture (auto-scales to zero)
- ✅ No credit card required
- ✅ Very similar to Supabase setup
- ✅ Built-in connection pooling

### Free Tier Limits

- **Storage:** 10 GB
- **Projects:** 3 (perfect for staging + 2 more)
- **Compute:** 191.9 compute hours/month
- **Always-on:** No (sleeps after inactivity, wakes instantly)

### Setup Steps

#### 1. Create Neon Account

1. Go to [https://neon.tech](https://neon.tech)
2. Click **"Sign Up"** (GitHub login recommended)
3. No credit card required!

#### 2. Create Project

1. Click **"Create Project"**
2. **Name:** `fullbodyworkout-staging`
3. **Region:** Choose closest to you
4. **Postgres version:** 16 (latest)
5. Click **"Create Project"**

Project is ready in seconds!

#### 3. Get Connection String

After project creation, you'll see a connection string like:

```
postgresql://username:password@ep-cool-name-123456.us-east-2.aws.neon.tech/neondb?sslmode=require
```

**Important:** Copy this immediately - password is only shown once!

#### 4. Create Database Schema

1. In Neon dashboard, click **"SQL Editor"** in left sidebar
2. Paste this SQL:

```sql
-- Create tables for workout tracker
CREATE TABLE completions (
  id SERIAL PRIMARY KEY,
  week INTEGER NOT NULL,
  day INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(week, day)
);

CREATE TABLE exercise_weights (
  id SERIAL PRIMARY KEY,
  week INTEGER NOT NULL,
  day INTEGER NOT NULL,
  exercise_name TEXT NOT NULL,
  weight NUMERIC NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(week, day, exercise_name)
);

-- Indexes for performance
CREATE INDEX idx_completions_week_day ON completions(week, day);
CREATE INDEX idx_exercise_weights_week_day ON exercise_weights(week, day);
CREATE INDEX idx_exercise_weights_name ON exercise_weights(exercise_name);

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_exercise_weights_updated_at
    BEFORE UPDATE ON exercise_weights
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
```

3. Click **"Run"**

#### 5. Update Code to Use Neon

Replace Supabase client with direct Postgres connection:

**Install Postgres client:**

```bash
npm install @neondatabase/serverless
```

**Update `client/src/lib/storage.ts`:**

Replace the Supabase client code with:

```typescript
import { neon } from '@neondatabase/serverless';

const sql = neon(import.meta.env.VITE_NEON_DATABASE_URL);

// Query functions remain similar
export async function fetchCompletions() {
  const completions = await sql`
    SELECT * FROM completions ORDER BY week, day
  `;
  return completions;
}

export async function toggleCompletion(week: number, day: number) {
  // Check if exists
  const existing = await sql`
    SELECT * FROM completions WHERE week = ${week} AND day = ${day}
  `;

  if (existing.length > 0) {
    await sql`DELETE FROM completions WHERE week = ${week} AND day = ${day}`;
    return null;
  } else {
    const result = await sql`
      INSERT INTO completions (week, day)
      VALUES (${week}, ${day})
      RETURNING *
    `;
    return result[0];
  }
}

// Similar patterns for other functions
```

**Update `.env.staging`:**

```env
VITE_NEON_DATABASE_URL=postgresql://username:password@ep-name.region.aws.neon.tech/neondb?sslmode=require
```

**Update Render environment variables:**

- Remove: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Add: `VITE_NEON_DATABASE_URL` = your Neon connection string

---

## 🚀 ALTERNATIVE: Turso (SQLite)

**Fastest setup, most generous free tier!**

### Why Turso?

- ✅ **Insanely generous free tier:** 9 GB storage, 1 billion row reads/month
- ✅ SQLite-based (edge-native, super fast)
- ✅ Built-in SDK for browsers
- ✅ No connection pooling needed
- ✅ Easiest to set up

### Free Tier Limits

- **Storage:** 9 GB
- **Row reads:** 1 billion/month
- **Row writes:** 25 million/month
- **Databases:** 500
- **Locations:** 3

This is **way more than you'll ever need** for staging!

### Setup Steps

#### 1. Install Turso CLI

```bash
curl -sSfL https://get.tur.so/install.sh | bash
```

Or with Homebrew:

```bash
brew install tursodatabase/tap/turso
```

#### 2. Sign Up & Create Database

```bash
# Sign up (opens browser)
turso auth signup

# Create database
turso db create fullbodyworkout-staging

# Get database URL
turso db show fullbodyworkout-staging --url

# Create authentication token
turso db tokens create fullbodyworkout-staging
```

#### 3. Create Schema

```bash
# Connect to database
turso db shell fullbodyworkout-staging
```

Then paste this SQL:

```sql
CREATE TABLE completions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  week INTEGER NOT NULL,
  day INTEGER NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(week, day)
);

CREATE TABLE exercise_weights (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  week INTEGER NOT NULL,
  day INTEGER NOT NULL,
  exercise_name TEXT NOT NULL,
  weight REAL NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(week, day, exercise_name)
);

CREATE INDEX idx_completions_week_day ON completions(week, day);
CREATE INDEX idx_exercise_weights_week_day ON exercise_weights(week, day);
CREATE INDEX idx_exercise_weights_name ON exercise_weights(exercise_name);
```

Type `.quit` to exit.

#### 4. Update Code

**Install Turso client:**

```bash
npm install @libsql/client
```

**Update `client/src/lib/storage.ts`:**

```typescript
import { createClient } from '@libsql/client';

const client = createClient({
  url: import.meta.env.VITE_TURSO_DATABASE_URL,
  authToken: import.meta.env.VITE_TURSO_AUTH_TOKEN,
});

export async function fetchCompletions() {
  const result = await client.execute('SELECT * FROM completions ORDER BY week, day');
  return result.rows;
}

export async function toggleCompletion(week: number, day: number) {
  const existing = await client.execute({
    sql: 'SELECT * FROM completions WHERE week = ? AND day = ?',
    args: [week, day],
  });

  if (existing.rows.length > 0) {
    await client.execute({
      sql: 'DELETE FROM completions WHERE week = ? AND day = ?',
      args: [week, day],
    });
    return null;
  } else {
    const result = await client.execute({
      sql: 'INSERT INTO completions (week, day) VALUES (?, ?) RETURNING *',
      args: [week, day],
    });
    return result.rows[0];
  }
}
```

**Update `.env.staging`:**

```env
VITE_TURSO_DATABASE_URL=libsql://your-db.turso.io
VITE_TURSO_AUTH_TOKEN=your-token-here
```

---

## 💡 SIMPLE OPTION: Railway

**Good balance of features and simplicity**

### Why Railway?

- ✅ Postgres database included
- ✅ $5 free credit per month (enough for staging)
- ✅ Easy one-click Postgres provisioning
- ✅ Good developer experience
- ✅ Similar to Heroku

### Free Tier

- **Credit:** $5/month (resets monthly)
- **Usage:** ~500 MB database storage within credit
- **Execution time:** Included in credit

### Setup Steps

1. Go to [https://railway.app](https://railway.app)
2. Sign up with GitHub
3. Click **"New Project"** → **"Provision PostgreSQL"**
4. Database is created instantly!
5. Click on Postgres service → **"Connect"** → Copy connection string
6. Use the same Neon setup instructions above (Railway uses Postgres)

---

## 📊 Other Options

### CockroachDB Serverless

- **Free tier:** 10 GB storage, 250M RUs/month
- **Pros:** Distributed SQL, Postgres-compatible
- **Cons:** More complex than needed
- **URL:** [https://cockroachlabs.cloud](https://cockroachlabs.cloud)

### PlanetScale

- **Free tier:** 5 GB storage, 1 billion row reads
- **Pros:** Generous free tier, good DX
- **Cons:** MySQL (not Postgres), requires SQL syntax changes
- **URL:** [https://planetscale.com](https://planetscale.com)

### Xata

- **Free tier:** 15 GB storage, 750k records
- **Pros:** Built-in search, great API
- **Cons:** Proprietary API (more code changes)
- **URL:** [https://xata.io](https://xata.io)

---

## 🎯 My Recommendation

For your situation, I recommend **Turso** for these reasons:

1. **Most generous free tier** - You'll never worry about limits
2. **Fastest setup** - Database created in seconds
3. **No project limits** - Create unlimited databases
4. **Edge-native** - Super fast globally
5. **Minimal code changes** - Similar API patterns

**Second choice:** Neon if you prefer staying with Postgres and want the closest Supabase alternative.

---

## 🔄 Migration Path

### From Supabase to Turso/Neon

1. **Export data from Supabase:**
   ```bash
   # In Supabase SQL Editor
   COPY (SELECT * FROM completions) TO STDOUT WITH CSV HEADER;
   COPY (SELECT * FROM exercise_weights) TO STDOUT WITH CSV HEADER;
   ```

2. **Import to new database:**
   - For Neon: Use SQL Editor, paste CSV import commands
   - For Turso: Use `.import` command in shell

3. **Update environment variables** in Render

4. **Redeploy** - Render will pick up new env vars

---

## 📝 Code Changes Summary

### Minimal Changes Needed

**Current (Supabase):**
```typescript
const { data } = await supabase.from('completions').select('*');
```

**Neon (Postgres):**
```typescript
const data = await sql`SELECT * FROM completions`;
```

**Turso (SQLite):**
```typescript
const result = await client.execute('SELECT * FROM completions');
const data = result.rows;
```

All are very similar patterns!

---

## 💰 Cost Comparison

| Provider | Monthly Cost | What You Get |
|----------|--------------|--------------|
| **Turso** | $0 | 9 GB storage, 1B row reads |
| **Neon** | $0 | 10 GB storage, 3 projects |
| **Railway** | $0* | $5 credit (~500 MB) |
| **CockroachDB** | $0 | 10 GB storage |
| **Supabase** | $0 | 500 MB (but you're out of projects) |

*Railway requires credit card but charges only what you use from $5 monthly credit.

---

## 🚀 Quick Start Script

Want to try Turso right now?

```bash
# Install Turso CLI
curl -sSfL https://get.tur.so/install.sh | bash

# Sign up
turso auth signup

# Create database
turso db create fullbodyworkout-staging

# Create schema
turso db shell fullbodyworkout-staging

# Then paste your CREATE TABLE statements

# Get credentials
turso db show fullbodyworkout-staging --url
turso db tokens create fullbodyworkout-staging
```

Done in 5 minutes! 🎉

---

## 🆘 Need Help?

1. **Turso Discord:** [https://discord.gg/turso](https://discord.gg/turso)
2. **Neon Discord:** [https://discord.gg/neon](https://discord.gg/neon)
3. **Railway Discord:** [https://discord.gg/railway](https://discord.gg/railway)

---

## Next Steps

1. **Choose a provider** (I recommend Turso or Neon)
2. **Create account and database** (5 minutes)
3. **Update code** (I can help with this!)
4. **Update Render env vars**
5. **Test and deploy**

Let me know which provider you'd like to use, and I'll help you update the code! 🚀
