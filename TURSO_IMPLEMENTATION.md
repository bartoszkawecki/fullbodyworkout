# Turso Implementation Guide

Complete step-by-step guide to migrate from Supabase to Turso for your staging environment.

## Why Turso?

- ✅ **9 GB storage free** (18x more than Supabase)
- ✅ **1 billion row reads/month** (basically unlimited for your use case)
- ✅ **500 databases on free tier**
- ✅ **No credit card required**
- ✅ **Fastest global edge database**

---

## Step 1: Install Turso CLI

### macOS / Linux:

```bash
curl -sSfL https://get.tur.so/install.sh | bash
```

### With Homebrew:

```bash
brew install tursodatabase/tap/turso
```

### Windows:

```powershell
powershell -c "irm https://get.tur.so/install.ps1 | iex"
```

---

## Step 2: Create Turso Database

```bash
# Sign up (opens browser for authentication)
turso auth signup

# Create staging database
turso db create fullbodyworkout-staging --location lax

# Available locations: lax (Los Angeles), ams (Amsterdam), fra (Frankfurt),
# gru (São Paulo), hkg (Hong Kong), iad (Washington DC), nrt (Tokyo), syd (Sydney)
```

---

## Step 3: Create Database Schema

```bash
# Open database shell
turso db shell fullbodyworkout-staging
```

Paste this SQL schema:

```sql
CREATE TABLE IF NOT EXISTS completions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  week INTEGER NOT NULL,
  day INTEGER NOT NULL,
  created_at TEXT DEFAULT (datetime('now', 'utc')),
  UNIQUE(week, day)
);

CREATE TABLE IF NOT EXISTS exercise_weights (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  week INTEGER NOT NULL,
  day INTEGER NOT NULL,
  exercise_name TEXT NOT NULL,
  weight REAL NOT NULL,
  created_at TEXT DEFAULT (datetime('now', 'utc')),
  updated_at TEXT DEFAULT (datetime('now', 'utc')),
  UNIQUE(week, day, exercise_name)
);

CREATE INDEX idx_completions_week_day ON completions(week, day);
CREATE INDEX idx_exercise_weights_week_day ON exercise_weights(week, day);
CREATE INDEX idx_exercise_weights_name ON exercise_weights(exercise_name);

-- Trigger to auto-update updated_at
CREATE TRIGGER update_exercise_weights_updated_at
AFTER UPDATE ON exercise_weights
FOR EACH ROW
BEGIN
  UPDATE exercise_weights SET updated_at = datetime('now', 'utc')
  WHERE id = NEW.id;
END;
```

Type `.quit` to exit the shell.

---

## Step 4: Get Database Credentials

```bash
# Get database URL
turso db show fullbodyworkout-staging --url

# Create auth token
turso db tokens create fullbodyworkout-staging
```

Save both values - you'll need them!

---

## Step 5: Install Turso Client

```bash
npm install @libsql/client
```

Update `package.json` (this should be added automatically):

```json
{
  "dependencies": {
    "@libsql/client": "^0.5.0"
  }
}
```

---

## Step 6: Create Turso Client

Create new file: `client/src/lib/turso.ts`

```typescript
import { createClient } from '@libsql/client';

if (!import.meta.env.VITE_TURSO_DATABASE_URL) {
  throw new Error('Missing VITE_TURSO_DATABASE_URL environment variable');
}

if (!import.meta.env.VITE_TURSO_AUTH_TOKEN) {
  throw new Error('Missing VITE_TURSO_AUTH_TOKEN environment variable');
}

export const turso = createClient({
  url: import.meta.env.VITE_TURSO_DATABASE_URL,
  authToken: import.meta.env.VITE_TURSO_AUTH_TOKEN,
});

export interface ExerciseWeight {
  id: number;
  week: number;
  day: number;
  exercise_name: string;
  weight: number;
  created_at: string;
  updated_at: string;
}
```

---

## Step 7: Update Storage File

Replace `client/src/lib/storage.ts` content:

```typescript
import { CompletionStatus, type Completion } from "@shared/schema";
import { queryClient } from "./queryClient";
import { turso, type ExerciseWeight } from "./turso";

let completionsCache: Completion[] | null = null;

// Fetch all completions from Turso
export async function fetchCompletions(): Promise<Completion[]> {
  const result = await turso.execute({
    sql: 'SELECT * FROM completions ORDER BY week ASC, day ASC',
    args: [],
  });

  const completions = result.rows.map(row => ({
    id: row.id as number,
    week: row.week as number,
    day: row.day as number,
  }));

  completionsCache = completions;
  return completions;
}

function completionsToStatus(completions: Completion[]): CompletionStatus {
  const status: CompletionStatus = {};
  for (const completion of completions) {
    const weekKey = `week${completion.week}`;
    const dayKey = `day${completion.day}`;
    if (!status[weekKey]) {
      status[weekKey] = {};
    }
    status[weekKey][dayKey] = true;
  }
  return status;
}

export function getCompletionStatus(): CompletionStatus {
  if (!completionsCache) {
    return {};
  }
  return completionsToStatus(completionsCache);
}

export function isDayCompleted(week: number, day: number): boolean {
  const status = getCompletionStatus();
  return status[`week${week}`]?.[`day${day}`] ?? false;
}

// Toggle day completion status
export async function toggleDayCompletion(week: number, day: number): Promise<void> {
  // Check if completion already exists
  const existing = await turso.execute({
    sql: 'SELECT * FROM completions WHERE week = ? AND day = ?',
    args: [week, day],
  });

  if (existing.rows.length > 0) {
    // Delete if exists
    await turso.execute({
      sql: 'DELETE FROM completions WHERE week = ? AND day = ?',
      args: [week, day],
    });
  } else {
    // Insert if doesn't exist
    await turso.execute({
      sql: 'INSERT INTO completions (week, day) VALUES (?, ?)',
      args: [week, day],
    });
  }

  // Invalidate React Query cache
  queryClient.invalidateQueries({ queryKey: ['completions'] });
}

export function getCompletedDaysForWeek(week: number): number {
  const status = getCompletionStatus();
  const weekData = status[`week${week}`];
  if (!weekData) return 0;
  return Object.values(weekData).filter(Boolean).length;
}

// Exercise weights functions
export interface ExerciseWeightData {
  week: number;
  day: number;
  exerciseName: string;
  weight: number;
}

export async function saveExerciseWeight(data: ExerciseWeightData): Promise<void> {
  const { week, day, exerciseName, weight } = data;

  // Check if weight already exists for this exercise on this day
  const existing = await turso.execute({
    sql: 'SELECT id FROM exercise_weights WHERE week = ? AND day = ? AND exercise_name = ?',
    args: [week, day, exerciseName],
  });

  if (existing.rows.length > 0) {
    // Update existing record
    await turso.execute({
      sql: 'UPDATE exercise_weights SET weight = ?, updated_at = datetime("now", "utc") WHERE id = ?',
      args: [weight, existing.rows[0].id],
    });
  } else {
    // Insert new record
    await turso.execute({
      sql: 'INSERT INTO exercise_weights (week, day, exercise_name, weight) VALUES (?, ?, ?, ?)',
      args: [week, day, exerciseName, weight],
    });
  }

  // Invalidate React Query cache
  queryClient.invalidateQueries({ queryKey: ['weights'] });
}

export async function getExerciseWeight(
  week: number,
  day: number,
  exerciseName: string
): Promise<number | null> {
  const result = await turso.execute({
    sql: 'SELECT weight FROM exercise_weights WHERE week = ? AND day = ? AND exercise_name = ?',
    args: [week, day, exerciseName],
  });

  if (result.rows.length === 0) {
    return null;
  }

  return result.rows[0].weight as number;
}

export async function getExerciseWeightHistory(exerciseName: string): Promise<ExerciseWeight[]> {
  const result = await turso.execute({
    sql: 'SELECT * FROM exercise_weights WHERE exercise_name = ? ORDER BY week ASC, day ASC',
    args: [exerciseName],
  });

  return result.rows.map(row => ({
    id: row.id as number,
    week: row.week as number,
    day: row.day as number,
    exercise_name: row.exercise_name as string,
    weight: row.weight as number,
    created_at: row.created_at as string,
    updated_at: row.updated_at as string,
  }));
}

export interface ExerciseStats {
  exerciseName: string;
  recordCount: number;
  bestWeight: number | null;
}

export async function getExerciseStats(): Promise<ExerciseStats[]> {
  const result = await turso.execute({
    sql: 'SELECT exercise_name, COUNT(*) as count, MAX(weight) as max_weight FROM exercise_weights GROUP BY exercise_name ORDER BY exercise_name',
    args: [],
  });

  return result.rows.map(row => ({
    exerciseName: row.exercise_name as string,
    recordCount: row.count as number,
    bestWeight: row.max_weight as number,
  }));
}

export async function deleteAllWeights(): Promise<void> {
  await turso.execute({
    sql: 'DELETE FROM exercise_weights',
    args: [],
  });

  queryClient.invalidateQueries({ queryKey: ['weights'] });
}

export async function deleteWeight(id: number): Promise<void> {
  await turso.execute({
    sql: 'DELETE FROM exercise_weights WHERE id = ?',
    args: [id],
  });

  queryClient.invalidateQueries({ queryKey: ['weights'] });
}

export async function deleteAllCompletions(): Promise<void> {
  await turso.execute({
    sql: 'DELETE FROM completions',
    args: [],
  });

  queryClient.invalidateQueries({ queryKey: ['completions'] });
}
```

---

## Step 8: Update Environment Variables

### Local Development

Create `.env.staging`:

```env
VITE_TURSO_DATABASE_URL=libsql://fullbodyworkout-staging-[your-org].turso.io
VITE_TURSO_AUTH_TOKEN=eyJhbGciOiJF... (your token here)
```

### Render Dashboard

1. Go to your Render static site
2. Click **"Environment"**
3. **Remove old variables:**
   - Delete `VITE_SUPABASE_URL`
   - Delete `VITE_SUPABASE_ANON_KEY`
4. **Add new variables:**
   - Key: `VITE_TURSO_DATABASE_URL`, Value: Your Turso database URL
   - Key: `VITE_TURSO_AUTH_TOKEN`, Value: Your Turso auth token
5. Click **"Save Changes"**

---

## Step 9: Test Locally

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Visit `http://localhost:5173` and test:
- ✅ View weeks and days
- ✅ Add workout weights
- ✅ Mark workouts as complete
- ✅ View progress page
- ✅ View exercise history

---

## Step 10: Deploy to Render

```bash
git add .
git commit -m "Migrate from Supabase to Turso for staging"
git push -u origin claude/staging-render-setup-017xZP8Updzg7tmxwuMrPPge
```

Render will automatically detect the push and redeploy!

---

## Optional: Import Existing Data

If you want to migrate data from your Supabase database:

### 1. Export from Supabase

In Supabase SQL Editor, run:

```sql
-- Export completions
SELECT week, day FROM completions ORDER BY week, day;

-- Export exercise_weights
SELECT week, day, exercise_name, weight FROM exercise_weights ORDER BY week, day;
```

Copy the results.

### 2. Import to Turso

```bash
turso db shell fullbodyworkout-staging
```

Then insert your data:

```sql
INSERT INTO completions (week, day) VALUES
(1, 1),
(1, 2),
(1, 3);

INSERT INTO exercise_weights (week, day, exercise_name, weight) VALUES
(1, 1, 'Bench Press', 135),
(1, 1, 'Squat', 185),
(1, 2, 'Bench Press', 140);
```

---

## Turso CLI Cheat Sheet

```bash
# List all databases
turso db list

# Show database info
turso db show fullbodyworkout-staging

# Open database shell
turso db shell fullbodyworkout-staging

# Get connection URL
turso db show fullbodyworkout-staging --url

# Create new auth token
turso db tokens create fullbodyworkout-staging

# Revoke auth token
turso db tokens revoke fullbodyworkout-staging <token>

# Delete database
turso db destroy fullbodyworkout-staging
```

---

## Troubleshooting

### Error: "Failed to fetch completions"

**Check:**
- Environment variables are set correctly
- Auth token is valid (not expired)
- Database URL is correct

**Solution:**
```bash
# Regenerate token
turso db tokens create fullbodyworkout-staging

# Update .env.staging with new token
# Restart dev server
```

### Error: "UNIQUE constraint failed"

**Issue:** Trying to insert duplicate data

**Solution:**
- This is expected behavior (enforcing data integrity)
- Check your database for existing records
- Use `INSERT OR REPLACE` if you want to overwrite

### Database queries are slow

**Check:**
- Indexes are created (run schema SQL again)
- Using the closest region to your users

**Solution:**
```bash
# Create a replica in another region
turso db replicate fullbodyworkout-staging --region iad
```

---

## Monitoring

### View Database Usage

```bash
turso db show fullbodyworkout-staging
```

Shows:
- Database size
- Number of rows
- Location(s)
- Created date

### View Query Logs

Dashboard: [https://turso.tech/app](https://turso.tech/app)

---

## Cost

**Your staging database cost: $0/month**

Free tier includes:
- 9 GB storage
- 1 billion row reads/month
- 25 million row writes/month
- 500 databases
- 3 locations

You'll never need to upgrade for staging! 🎉

---

## Next Steps

✅ Turso is set up and working!

Consider:
1. Set up production database (also free!)
2. Add database backups (Turso CLI supports snapshots)
3. Monitor usage in Turso dashboard
4. Explore multi-region replication for faster global access

---

## Support

- **Turso Documentation:** [https://docs.turso.tech](https://docs.turso.tech)
- **Turso Discord:** [https://discord.gg/turso](https://discord.gg/turso)
- **Turso GitHub:** [https://github.com/tursodatabase](https://github.com/tursodatabase)

---

Happy lifting with Turso! 💪🚀
