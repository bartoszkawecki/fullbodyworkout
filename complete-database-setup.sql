-- Complete database setup script
-- This script will set up everything from scratch
-- Run this in Supabase SQL Editor

-- Step 1: Add user_id columns if they don't exist
DO $$
BEGIN
  -- Add user_id to exercise_weights if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'exercise_weights'
      AND column_name = 'user_id'
  ) THEN
    ALTER TABLE public.exercise_weights
    ADD COLUMN user_id UUID;
    RAISE NOTICE 'Added user_id column to exercise_weights';
  ELSE
    RAISE NOTICE 'user_id column already exists in exercise_weights';
  END IF;

  -- Add user_id to completions if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'completions'
      AND column_name = 'user_id'
  ) THEN
    ALTER TABLE public.completions
    ADD COLUMN user_id UUID;
    RAISE NOTICE 'Added user_id column to completions';
  ELSE
    RAISE NOTICE 'user_id column already exists in completions';
  END IF;
END $$;

-- Step 2: Create bartoszkawecki user if doesn't exist
DO $$
DECLARE
  bartosz_user_id UUID;
  user_exists BOOLEAN;
BEGIN
  -- Check if user exists
  SELECT id INTO bartosz_user_id
  FROM auth.users
  WHERE email = 'bartoszkawecki@workout.app';

  user_exists := bartosz_user_id IS NOT NULL;

  IF NOT user_exists THEN
    -- Create the user using Supabase auth.users table
    INSERT INTO auth.users (
      instance_id,
      id,
      aud,
      role,
      email,
      encrypted_password,
      email_confirmed_at,
      raw_app_meta_data,
      raw_user_meta_data,
      created_at,
      updated_at,
      confirmation_token,
      email_change,
      email_change_token_new,
      recovery_token
    ) VALUES (
      '00000000-0000-0000-0000-000000000000',
      gen_random_uuid(),
      'authenticated',
      'authenticated',
      'bartoszkawecki@workout.app',
      crypt('Burgerek2137', gen_salt('bf')),
      NOW(),
      '{"provider":"email","providers":["email"]}',
      '{"username":"bartoszkawecki"}',
      NOW(),
      NOW(),
      '',
      '',
      '',
      ''
    ) RETURNING id INTO bartosz_user_id;

    RAISE NOTICE 'Created user bartoszkawecki with ID: %', bartosz_user_id;
  ELSE
    RAISE NOTICE 'User bartoszkawecki already exists with ID: %', bartosz_user_id;
  END IF;
END $$;

-- Step 3: Update existing NULL user_id records to bartoszkawecki
DO $$
DECLARE
  bartosz_user_id UUID;
  weight_count INT;
  completion_count INT;
BEGIN
  -- Get bartoszkawecki user ID
  SELECT id INTO bartosz_user_id
  FROM auth.users
  WHERE email = 'bartoszkawecki@workout.app';

  IF bartosz_user_id IS NULL THEN
    RAISE EXCEPTION 'Cannot find bartoszkawecki user';
  END IF;

  -- Update NULL user_ids in exercise_weights
  UPDATE public.exercise_weights
  SET user_id = bartosz_user_id
  WHERE user_id IS NULL;

  GET DIAGNOSTICS weight_count = ROW_COUNT;
  RAISE NOTICE 'Updated % exercise_weights records to bartoszkawecki', weight_count;

  -- Update NULL user_ids in completions
  UPDATE public.completions
  SET user_id = bartosz_user_id
  WHERE user_id IS NULL;

  GET DIAGNOSTICS completion_count = ROW_COUNT;
  RAISE NOTICE 'Updated % completions records to bartoszkawecki', completion_count;
END $$;

-- Step 4: Make user_id NOT NULL (after data migration)
ALTER TABLE public.exercise_weights ALTER COLUMN user_id SET NOT NULL;
ALTER TABLE public.completions ALTER COLUMN user_id SET NOT NULL;

-- Step 5: Drop old constraints and create new ones with user_id
ALTER TABLE public.exercise_weights
DROP CONSTRAINT IF EXISTS exercise_weights_week_day_exercise_name_key,
DROP CONSTRAINT IF EXISTS unique_exercise_per_day,
DROP CONSTRAINT IF EXISTS exercise_weights_user_week_day_exercise_unique;

ALTER TABLE public.exercise_weights
ADD CONSTRAINT exercise_weights_user_week_day_exercise_unique
UNIQUE (user_id, week, day, exercise_name);

ALTER TABLE public.completions
DROP CONSTRAINT IF EXISTS completions_week_day_key,
DROP CONSTRAINT IF EXISTS unique_completion,
DROP CONSTRAINT IF EXISTS completions_user_week_day_unique;

ALTER TABLE public.completions
ADD CONSTRAINT completions_user_week_day_unique
UNIQUE (user_id, week, day);

-- Step 6: Enable RLS if not already enabled
ALTER TABLE public.exercise_weights ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.completions ENABLE ROW LEVEL SECURITY;

-- Step 7: Drop old policies
DROP POLICY IF EXISTS "Allow all operations on exercise_weights" ON public.exercise_weights;
DROP POLICY IF EXISTS "Allow all operations on completions" ON public.completions;
DROP POLICY IF EXISTS "Users can view their own exercise weights" ON public.exercise_weights;
DROP POLICY IF EXISTS "Users can insert their own exercise weights" ON public.exercise_weights;
DROP POLICY IF EXISTS "Users can update their own exercise weights" ON public.exercise_weights;
DROP POLICY IF EXISTS "Users can delete their own exercise weights" ON public.exercise_weights;
DROP POLICY IF EXISTS "Users can view their own completions" ON public.completions;
DROP POLICY IF EXISTS "Users can insert their own completions" ON public.completions;
DROP POLICY IF EXISTS "Users can update their own completions" ON public.completions;
DROP POLICY IF EXISTS "Users can delete their own completions" ON public.completions;

-- Step 8: Create new user-scoped RLS policies
CREATE POLICY "Users can view their own exercise weights"
ON public.exercise_weights
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own exercise weights"
ON public.exercise_weights
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own exercise weights"
ON public.exercise_weights
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own exercise weights"
ON public.exercise_weights
FOR DELETE
USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own completions"
ON public.completions
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own completions"
ON public.completions
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own completions"
ON public.completions
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own completions"
ON public.completions
FOR DELETE
USING (auth.uid() = user_id);

-- Step 9: Verify setup
DO $$
DECLARE
  bartosz_user_id UUID;
BEGIN
  SELECT id INTO bartosz_user_id
  FROM auth.users
  WHERE email = 'bartoszkawecki@workout.app';

  RAISE NOTICE '=== Setup Complete ===';
  RAISE NOTICE 'bartoszkawecki user ID: %', bartosz_user_id;
  RAISE NOTICE 'Total exercise weights: %', (SELECT COUNT(*) FROM public.exercise_weights WHERE user_id = bartosz_user_id);
  RAISE NOTICE 'Total completions: %', (SELECT COUNT(*) FROM public.completions WHERE user_id = bartosz_user_id);
  RAISE NOTICE 'You can now log in with username: bartoszkawecki, password: Burgerek2137';
END $$;
