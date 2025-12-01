-- ================================================================
-- FIX USER IDS IN SUPABASE DATABASE
-- This script will update all workout data to use the correct user_id
-- ================================================================

-- Step 1: Find your Supabase user ID
-- This query will show all users in Supabase auth
SELECT
    id as user_id,
    email,
    raw_user_meta_data->>'username' as username,
    created_at
FROM auth.users
ORDER BY created_at DESC;

-- You should see bartoszkawecki@workout.app with a UUID like:
-- 12345678-abcd-1234-abcd-123456789abc

-- ================================================================
-- Step 2: Check current data
-- ================================================================

-- See what user_ids are currently in the tables
SELECT 'Current exercise_weights user_ids:' as info;
SELECT DISTINCT user_id, COUNT(*) as count
FROM exercise_weights
GROUP BY user_id;

SELECT 'Current completions user_ids:' as info;
SELECT DISTINCT user_id, COUNT(*) as count
FROM completions
GROUP BY user_id;

-- ================================================================
-- Step 3: Update the user_ids
-- IMPORTANT: Replace 'YOUR_ACTUAL_USER_ID_HERE' with the UUID from Step 1
-- ================================================================

-- UNCOMMENT AND RUN THESE AFTER REPLACING THE USER ID:

-- UPDATE exercise_weights
-- SET user_id = 'YOUR_ACTUAL_USER_ID_HERE'
-- WHERE user_id != 'YOUR_ACTUAL_USER_ID_HERE';

-- UPDATE completions
-- SET user_id = 'YOUR_ACTUAL_USER_ID_HERE'
-- WHERE user_id != 'YOUR_ACTUAL_USER_ID_HERE';

-- ================================================================
-- Step 4: Verify the fix
-- ================================================================

-- Check that all data now belongs to the correct user
SELECT
    'exercise_weights' as table_name,
    user_id,
    COUNT(*) as row_count
FROM exercise_weights
GROUP BY user_id

UNION ALL

SELECT
    'completions' as table_name,
    user_id,
    COUNT(*) as row_count
FROM completions
GROUP BY user_id;

-- ================================================================
-- INSTRUCTIONS:
-- ================================================================
-- 1. Run Step 1 to find your user ID (the UUID for bartoszkawecki@workout.app)
-- 2. Copy that UUID
-- 3. Run Step 2 to see current user_ids in the data
-- 4. Replace 'YOUR_ACTUAL_USER_ID_HERE' in Step 3 with your actual UUID
-- 5. Uncomment and run the UPDATE statements in Step 3
-- 6. Run Step 4 to verify all data now has the correct user_id
-- ================================================================
