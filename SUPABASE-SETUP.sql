-- ================================================================
-- SUPABASE DATABASE SETUP FOR FULLBODYWORKOUT
-- Run this script in Supabase SQL Editor
-- https://supabase.com/dashboard/project/vnqllfnzygfpvniwkfdd/editor
-- ================================================================

-- Step 1: Create exercise_weights table
CREATE TABLE IF NOT EXISTS exercise_weights (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    week INTEGER NOT NULL,
    day INTEGER NOT NULL,
    exercise_name TEXT NOT NULL,
    weight NUMERIC(5, 2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT unique_exercise_per_day UNIQUE (user_id, week, day, exercise_name)
);

-- Step 2: Create completions table
CREATE TABLE IF NOT EXISTS completions (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    week INTEGER NOT NULL,
    day INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT unique_completion UNIQUE (user_id, week, day)
);

-- Step 3: Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_exercise_weights_user_id ON exercise_weights(user_id);
CREATE INDEX IF NOT EXISTS idx_exercise_weights_lookup ON exercise_weights(user_id, week, day, exercise_name);
CREATE INDEX IF NOT EXISTS idx_completions_user_id ON completions(user_id);
CREATE INDEX IF NOT EXISTS idx_completions_lookup ON completions(user_id, week, day);

-- Step 4: Enable Row Level Security (RLS)
ALTER TABLE exercise_weights ENABLE ROW LEVEL SECURITY;
ALTER TABLE completions ENABLE ROW LEVEL SECURITY;

-- Step 5: Create RLS policies
-- Users can only see and modify their own data

-- Exercise weights policies
DROP POLICY IF EXISTS "Users can view their own exercise weights" ON exercise_weights;
CREATE POLICY "Users can view their own exercise weights"
    ON exercise_weights FOR SELECT
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own exercise weights" ON exercise_weights;
CREATE POLICY "Users can insert their own exercise weights"
    ON exercise_weights FOR INSERT
    WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own exercise weights" ON exercise_weights;
CREATE POLICY "Users can update their own exercise weights"
    ON exercise_weights FOR UPDATE
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete their own exercise weights" ON exercise_weights;
CREATE POLICY "Users can delete their own exercise weights"
    ON exercise_weights FOR DELETE
    USING (auth.uid() = user_id);

-- Completions policies
DROP POLICY IF EXISTS "Users can view their own completions" ON completions;
CREATE POLICY "Users can view their own completions"
    ON completions FOR SELECT
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own completions" ON completions;
CREATE POLICY "Users can insert their own completions"
    ON completions FOR INSERT
    WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own completions" ON completions;
CREATE POLICY "Users can update their own completions"
    ON completions FOR UPDATE
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete their own completions" ON completions;
CREATE POLICY "Users can delete their own completions"
    ON completions FOR DELETE
    USING (auth.uid() = user_id);

-- Step 6: Verify setup
SELECT 'Tables created successfully!' as status;

SELECT
    'exercise_weights' as table_name,
    COUNT(*) as row_count
FROM exercise_weights
UNION ALL
SELECT
    'completions' as table_name,
    COUNT(*) as row_count
FROM completions;

-- ================================================================
-- NEXT STEPS:
-- ================================================================
-- 1. Run this entire script in Supabase SQL Editor
-- 2. Update DATABASE_URL in Render to use Supabase connection string
-- 3. Redeploy your Render service
-- 4. Test logging in and saving workout data
-- 5. Later: Import old data from Neon (separate script)
-- ================================================================
