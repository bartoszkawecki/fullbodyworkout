-- ================================================================
-- COMPLETE DATABASE SETUP FOR FULLBODYWORKOUT WITH AUTHENTICATION
-- Run this script in your Neon database SQL editor
-- ================================================================

-- Step 1: Add user_id columns to existing tables (if they don't exist)
-- This is safe to run multiple times
DO $$
BEGIN
    -- Add user_id to exercise_weights if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name = 'exercise_weights' AND column_name = 'user_id'
    ) THEN
        ALTER TABLE exercise_weights ADD COLUMN user_id UUID;
        -- Set a default UUID for existing rows (will be updated later)
        UPDATE exercise_weights SET user_id = '00000000-0000-0000-0000-000000000000' WHERE user_id IS NULL;
        ALTER TABLE exercise_weights ALTER COLUMN user_id SET NOT NULL;
    END IF;

    -- Add user_id to completions if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name = 'completions' AND column_name = 'user_id'
    ) THEN
        ALTER TABLE completions ADD COLUMN user_id UUID;
        -- Set a default UUID for existing rows (will be updated later)
        UPDATE completions SET user_id = '00000000-0000-0000-0000-000000000000' WHERE user_id IS NULL;
        ALTER TABLE completions ALTER COLUMN user_id SET NOT NULL;
    END IF;
END $$;

-- Step 2: Drop old constraints and create new ones with user_id
-- Drop existing unique constraints
ALTER TABLE exercise_weights DROP CONSTRAINT IF EXISTS unique_exercise_per_day;
ALTER TABLE completions DROP CONSTRAINT IF EXISTS unique_completion;

-- Create new unique constraints that include user_id
ALTER TABLE exercise_weights
    ADD CONSTRAINT unique_exercise_per_day
    UNIQUE (user_id, week, day, exercise_name);

ALTER TABLE completions
    ADD CONSTRAINT unique_completion
    UNIQUE (user_id, week, day);

-- Step 3: Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_exercise_weights_user_id ON exercise_weights(user_id);
CREATE INDEX IF NOT EXISTS idx_completions_user_id ON completions(user_id);

-- ================================================================
-- Step 4: Get bartoszkawecki's Supabase user ID
-- ================================================================
-- NOTE: You need to get this from Supabase
-- Go to: https://supabase.com/dashboard/project/vnqllfnzygfpvniwkfdd/auth/users
-- Find the bartoszkawecki user and copy their User UID
-- It will look like: 12345678-1234-1234-1234-123456789abc
--
-- Then replace YOUR_USER_ID_HERE below with the actual UUID

-- ================================================================
-- Step 5: Assign all existing data to bartoszkawecki
-- ================================================================
-- IMPORTANT: Replace YOUR_USER_ID_HERE with the actual user ID from Supabase!

-- Update exercise_weights to assign to bartoszkawecki
-- UPDATE exercise_weights
-- SET user_id = 'YOUR_USER_ID_HERE'
-- WHERE user_id = '00000000-0000-0000-0000-000000000000';

-- Update completions to assign to bartoszkawecki
-- UPDATE completions
-- SET user_id = 'YOUR_USER_ID_HERE'
-- WHERE user_id = '00000000-0000-0000-0000-000000000000';

-- ================================================================
-- Step 6: Verify the setup
-- ================================================================
SELECT
    'exercise_weights' as table_name,
    COUNT(*) as total_rows,
    COUNT(DISTINCT user_id) as unique_users
FROM exercise_weights
UNION ALL
SELECT
    'completions' as table_name,
    COUNT(*) as total_rows,
    COUNT(DISTINCT user_id) as unique_users
FROM completions;

-- Show sample data
SELECT 'Sample exercise_weights:' as info;
SELECT user_id, week, day, exercise_name, weight
FROM exercise_weights
LIMIT 5;

SELECT 'Sample completions:' as info;
SELECT user_id, week, day
FROM completions
LIMIT 5;

-- ================================================================
-- INSTRUCTIONS:
-- ================================================================
-- 1. First, run lines 1-59 (through the indexes)
-- 2. Go to Supabase Auth Users page and find bartoszkawecki's User UID
-- 3. Replace YOUR_USER_ID_HERE in lines 68-74 with the actual UUID
-- 4. Uncomment lines 68-74 (remove the -- at the start)
-- 5. Run lines 68-74 to assign data to the user
-- 6. Run lines 80-96 to verify everything worked
-- ================================================================
