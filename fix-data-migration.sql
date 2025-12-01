-- Step 1: Check if the bartoszkawecki user exists
SELECT id, email, raw_user_meta_data
FROM auth.users
WHERE email = 'bartoszkawecki@workout.app';

-- Step 2: Check current data in exercise_weights and completions
SELECT COUNT(*) as total_weights, COUNT(DISTINCT user_id) as distinct_users
FROM public.exercise_weights;

SELECT COUNT(*) as total_completions, COUNT(DISTINCT user_id) as distinct_users
FROM public.completions;

-- Step 3: Check if there's any data with NULL user_id
SELECT COUNT(*) FROM public.exercise_weights WHERE user_id IS NULL;
SELECT COUNT(*) FROM public.completions WHERE user_id IS NULL;

-- Step 4: Assign ALL existing data to bartoszkawecki user
-- First, get the user_id (replace with actual ID after step 1)
DO $$
DECLARE
  bartosz_user_id UUID;
BEGIN
  -- Get the bartoszkawecki user ID
  SELECT id INTO bartosz_user_id
  FROM auth.users
  WHERE email = 'bartoszkawecki@workout.app';

  IF bartosz_user_id IS NULL THEN
    RAISE EXCEPTION 'User bartoszkawecki@workout.app not found. Please create the user first.';
  END IF;

  -- Update ALL exercise_weights to belong to bartoszkawecki
  -- This will update records that either have no user_id or belong to other users
  UPDATE public.exercise_weights
  SET user_id = bartosz_user_id;

  -- Update ALL completions to belong to bartoszkawecki
  UPDATE public.completions
  SET user_id = bartosz_user_id;

  RAISE NOTICE 'Successfully assigned all data to user: %', bartosz_user_id;
END $$;

-- Step 5: Verify the migration
SELECT COUNT(*) as total_weights
FROM public.exercise_weights
WHERE user_id = (SELECT id FROM auth.users WHERE email = 'bartoszkawecki@workout.app');

SELECT COUNT(*) as total_completions
FROM public.completions
WHERE user_id = (SELECT id FROM auth.users WHERE email = 'bartoszkawecki@workout.app');
