-- Diagnostic script to check database state
-- Run this in Supabase SQL Editor to see what's configured

-- Check 1: Does the bartoszkawecki user exist?
SELECT
  id,
  email,
  email_confirmed_at,
  raw_user_meta_data->>'username' as username,
  created_at
FROM auth.users
WHERE email = 'bartoszkawecki@workout.app';

-- Check 2: What columns exist in exercise_weights table?
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = 'exercise_weights'
ORDER BY ordinal_position;

-- Check 3: What columns exist in completions table?
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = 'completions'
ORDER BY ordinal_position;

-- Check 4: What constraints exist on exercise_weights?
SELECT constraint_name, constraint_type
FROM information_schema.table_constraints
WHERE table_schema = 'public'
  AND table_name = 'exercise_weights';

-- Check 5: What constraints exist on completions?
SELECT constraint_name, constraint_type
FROM information_schema.table_constraints
WHERE table_schema = 'public'
  AND table_name = 'completions';

-- Check 6: What data currently exists (any user_id values)?
SELECT
  'exercise_weights' as table_name,
  COUNT(*) as total_records,
  COUNT(DISTINCT user_id) as distinct_users,
  COUNT(*) FILTER (WHERE user_id IS NULL) as null_user_ids
FROM public.exercise_weights
UNION ALL
SELECT
  'completions' as table_name,
  COUNT(*) as total_records,
  COUNT(DISTINCT user_id) as distinct_users,
  COUNT(*) FILTER (WHERE user_id IS NULL) as null_user_ids
FROM public.completions;

-- Check 7: What RLS policies exist?
SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename IN ('exercise_weights', 'completions')
ORDER BY tablename, policyname;
