-- COMPLETE SETUP AND DATA IMPORT SCRIPT
-- Run this ONE script in Supabase SQL Editor to set up everything
-- This combines schema updates, user creation, RLS policies, and data import

-- ============================================================================
-- PART 1: SCHEMA SETUP
-- ============================================================================

-- Add user_id columns if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'exercise_weights'
      AND column_name = 'user_id'
  ) THEN
    ALTER TABLE public.exercise_weights ADD COLUMN user_id UUID;
    RAISE NOTICE '✓ Added user_id column to exercise_weights';
  ELSE
    RAISE NOTICE '✓ user_id column already exists in exercise_weights';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'completions'
      AND column_name = 'user_id'
  ) THEN
    ALTER TABLE public.completions ADD COLUMN user_id UUID;
    RAISE NOTICE '✓ Added user_id column to completions';
  ELSE
    RAISE NOTICE '✓ user_id column already exists in completions';
  END IF;
END $$;

-- ============================================================================
-- PART 2: CREATE BARTOSZKAWECKI USER
-- ============================================================================

DO $$
DECLARE
  bartosz_user_id UUID;
BEGIN
  SELECT id INTO bartosz_user_id
  FROM auth.users
  WHERE email = 'bartoszkawecki@workout.app';

  IF bartosz_user_id IS NULL THEN
    INSERT INTO auth.users (
      instance_id, id, aud, role, email,
      encrypted_password, email_confirmed_at,
      raw_app_meta_data, raw_user_meta_data,
      created_at, updated_at,
      confirmation_token, email_change,
      email_change_token_new, recovery_token
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
    RAISE NOTICE '✓ Created user bartoszkawecki with ID: %', bartosz_user_id;
  ELSE
    RAISE NOTICE '✓ User bartoszkawecki already exists with ID: %', bartosz_user_id;
  END IF;
END $$;

-- ============================================================================
-- PART 3: CLEAN AND PREPARE FOR IMPORT
-- ============================================================================

DO $$
DECLARE
  bartosz_user_id UUID;
BEGIN
  SELECT id INTO bartosz_user_id FROM auth.users WHERE email = 'bartoszkawecki@workout.app';

  IF bartosz_user_id IS NULL THEN
    RAISE EXCEPTION 'Cannot find bartoszkawecki user';
  END IF;

  -- Delete existing data for this user
  DELETE FROM public.completions WHERE user_id = bartosz_user_id;
  DELETE FROM public.exercise_weights WHERE user_id = bartosz_user_id;

  RAISE NOTICE '✓ Cleared existing data for bartoszkawecki';
END $$;

-- ============================================================================
-- PART 4: IMPORT WORKOUT DATA
-- ============================================================================

DO $$
DECLARE
  bartosz_user_id UUID;
BEGIN
  SELECT id INTO bartosz_user_id FROM auth.users WHERE email = 'bartoszkawecki@workout.app';

  -- Import completions
  INSERT INTO public.completions (user_id, week, day) VALUES
    (bartosz_user_id, 1, 1), (bartosz_user_id, 1, 2), (bartosz_user_id, 1, 3),
    (bartosz_user_id, 1, 4), (bartosz_user_id, 1, 5), (bartosz_user_id, 2, 1),
    (bartosz_user_id, 2, 2), (bartosz_user_id, 2, 3), (bartosz_user_id, 2, 4),
    (bartosz_user_id, 2, 5), (bartosz_user_id, 3, 1), (bartosz_user_id, 3, 2),
    (bartosz_user_id, 3, 3), (bartosz_user_id, 3, 4), (bartosz_user_id, 3, 5),
    (bartosz_user_id, 4, 1), (bartosz_user_id, 4, 2), (bartosz_user_id, 4, 3),
    (bartosz_user_id, 4, 4), (bartosz_user_id, 4, 5), (bartosz_user_id, 5, 1),
    (bartosz_user_id, 5, 2);

  RAISE NOTICE '✓ Imported 22 completion records';

  -- Import exercise weights
  INSERT INTO public.exercise_weights (user_id, week, day, exercise_name, weight) VALUES
    (bartosz_user_id, 2, 3, 'Seated Cable Row', 30.00),
    (bartosz_user_id, 2, 3, 'DB Walking Lunge', 10.00),
    (bartosz_user_id, 2, 3, 'DB Bicep Curl', 6.00),
    (bartosz_user_id, 2, 3, 'Cable Upright Row', 12.50),
    (bartosz_user_id, 1, 2, 'Smith Machine Shoulder Press', 20.00),
    (bartosz_user_id, 2, 4, 'Incline DB Press', 10.00),
    (bartosz_user_id, 2, 4, 'Leg Extension', 25.00),
    (bartosz_user_id, 2, 4, 'Smith Machine Calf Raise', 22.00),
    (bartosz_user_id, 2, 4, 'Cable Lateral Raise', 5.00),
    (bartosz_user_id, 2, 5, 'Lat Pulldown', 35.00),
    (bartosz_user_id, 2, 5, 'Alternating DB Shoulder Press', 8.00),
    (bartosz_user_id, 2, 5, 'BB Hip Thrust', 40.00),
    (bartosz_user_id, 2, 5, 'Cable Pushdown', 10.00),
    (bartosz_user_id, 2, 5, 'DB Bicep Curl', 6.00),
    (bartosz_user_id, 3, 1, 'Smith Machine Squat', 25.00),
    (bartosz_user_id, 3, 1, 'Seated Cable Row', 35.00),
    (bartosz_user_id, 3, 1, 'BB Bench Press', 7.00),
    (bartosz_user_id, 3, 1, 'DB Lateral Raise', 6.00),
    (bartosz_user_id, 3, 2, 'Lat Pull-down (close grip)', 35.00),
    (bartosz_user_id, 3, 2, 'BB Overhead Press', 15.00),
    (bartosz_user_id, 3, 2, 'Leg Curl', 45.00),
    (bartosz_user_id, 3, 2, 'Pec Deck', 30.00),
    (bartosz_user_id, 3, 2, 'Cable Pushdown', 15.00),
    (bartosz_user_id, 3, 3, 'Chest Supported Row', 12.00),
    (bartosz_user_id, 3, 3, 'Cable Upright Row', 15.00),
    (bartosz_user_id, 3, 3, 'DB Bicep Curl', 8.00),
    (bartosz_user_id, 3, 4, 'Incline DB Press', 10.00),
    (bartosz_user_id, 3, 4, 'Sumo Deadlift', 30.00),
    (bartosz_user_id, 3, 4, 'Smith Machine Calf Raise', 25.00),
    (bartosz_user_id, 3, 4, 'Cable Lateral Raise', 5.00),
    (bartosz_user_id, 3, 5, 'Lat Pull-down (wide grip)', 35.00),
    (bartosz_user_id, 3, 5, 'Alternating DB Shoulder Press', 8.00),
    (bartosz_user_id, 3, 5, 'BB Hip Thrust', 40.00),
    (bartosz_user_id, 3, 5, 'Standing Cable Chest Flye', 5.00),
    (bartosz_user_id, 3, 5, 'Cable Pushdown', 17.50),
    (bartosz_user_id, 3, 5, 'DB Bicep Curl', 8.00),
    (bartosz_user_id, 4, 1, 'Smith Machine Squat', 30.00),
    (bartosz_user_id, 4, 1, 'BB Bench Press', 5.00),
    (bartosz_user_id, 4, 1, 'Smith Machine Calf Raise', 30.00),
    (bartosz_user_id, 4, 1, 'Seated Cable Row', 40.00),
    (bartosz_user_id, 4, 1, 'DB Lateral Raise', 6.00),
    (bartosz_user_id, 4, 2, 'BB Overhead Press', 15.00),
    (bartosz_user_id, 4, 2, 'Lat Pull-down (close grip)', 40.00),
    (bartosz_user_id, 4, 2, 'Pec Deck', 40.00),
    (bartosz_user_id, 4, 3, 'Chest Supported Row', 12.00),
    (bartosz_user_id, 4, 3, 'DB Bicep Curl', 6.00),
    (bartosz_user_id, 4, 3, 'Cable Upright Row', 15.00),
    (bartosz_user_id, 4, 4, 'Sumo Deadlift', 30.00),
    (bartosz_user_id, 4, 4, 'Smith Machine Calf Raise', 30.00),
    (bartosz_user_id, 4, 4, 'Incline DB Press', 10.00),
    (bartosz_user_id, 4, 4, 'Leg Extension', 39.00),
    (bartosz_user_id, 4, 4, 'Cable Lateral Raise', 7.50),
    (bartosz_user_id, 4, 5, 'Lat Pull-down (wide grip)', 40.00),
    (bartosz_user_id, 4, 5, 'Alternating DB Shoulder Press', 8.00),
    (bartosz_user_id, 4, 5, 'Standing Cable Chest Flye', 7.50),
    (bartosz_user_id, 4, 5, 'Cable Pushdown', 20.00),
    (bartosz_user_id, 4, 5, 'DB Bicep Curl', 10.00),
    (bartosz_user_id, 5, 1, 'Back Squat', 35.00),
    (bartosz_user_id, 5, 1, 'BB Bench Press', 10.00),
    (bartosz_user_id, 5, 1, 'Chest Supported Row', 14.00),
    (bartosz_user_id, 5, 1, 'DB Lateral Raise', 5.00),
    (bartosz_user_id, 5, 1, 'DB Single-Leg Calf Raise', 20.00),
    (bartosz_user_id, 5, 2, 'BB Overhead Press', 20.00),
    (bartosz_user_id, 5, 2, 'Lat Pulldown', 40.00),
    (bartosz_user_id, 5, 2, 'Leg Extension', 45.00),
    (bartosz_user_id, 5, 2, 'Standing Cable Chest Flye', 8.00),
    (bartosz_user_id, 5, 2, 'Cable Pushdown', 20.00),
    (bartosz_user_id, 5, 3, 'Incline DB Press', 12.00),
    (bartosz_user_id, 5, 3, 'Leg Curl', 45.00);

  RAISE NOTICE '✓ Imported 69 exercise weight records';
END $$;

-- ============================================================================
-- PART 5: SET CONSTRAINTS
-- ============================================================================

-- Make user_id NOT NULL
ALTER TABLE public.exercise_weights ALTER COLUMN user_id SET NOT NULL;
ALTER TABLE public.completions ALTER COLUMN user_id SET NOT NULL;

-- Drop old unique constraints
ALTER TABLE public.exercise_weights
DROP CONSTRAINT IF EXISTS exercise_weights_week_day_exercise_name_key,
DROP CONSTRAINT IF EXISTS unique_exercise_per_day,
DROP CONSTRAINT IF EXISTS exercise_weights_user_week_day_exercise_unique;

-- Create new unique constraints with user_id
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

-- ============================================================================
-- PART 6: SETUP ROW LEVEL SECURITY
-- ============================================================================

-- Enable RLS
ALTER TABLE public.exercise_weights ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.completions ENABLE ROW LEVEL SECURITY;

-- Drop all existing policies
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

-- Create new RLS policies
CREATE POLICY "Users can view their own exercise weights"
ON public.exercise_weights FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own exercise weights"
ON public.exercise_weights FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own exercise weights"
ON public.exercise_weights FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own exercise weights"
ON public.exercise_weights FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own completions"
ON public.completions FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own completions"
ON public.completions FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own completions"
ON public.completions FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own completions"
ON public.completions FOR DELETE USING (auth.uid() = user_id);

-- ============================================================================
-- PART 7: VERIFICATION
-- ============================================================================

DO $$
DECLARE
  bartosz_user_id UUID;
  weight_count INT;
  completion_count INT;
BEGIN
  SELECT id INTO bartosz_user_id FROM auth.users WHERE email = 'bartoszkawecki@workout.app';
  SELECT COUNT(*) INTO weight_count FROM public.exercise_weights WHERE user_id = bartosz_user_id;
  SELECT COUNT(*) INTO completion_count FROM public.completions WHERE user_id = bartosz_user_id;

  RAISE NOTICE '';
  RAISE NOTICE '═══════════════════════════════════════════════';
  RAISE NOTICE '✓ SETUP COMPLETE!';
  RAISE NOTICE '═══════════════════════════════════════════════';
  RAISE NOTICE 'User: bartoszkawecki';
  RAISE NOTICE 'User ID: %', bartosz_user_id;
  RAISE NOTICE 'Exercise weights imported: %', weight_count;
  RAISE NOTICE 'Completions imported: %', completion_count;
  RAISE NOTICE '';
  RAISE NOTICE 'Login credentials:';
  RAISE NOTICE '  Username: bartoszkawecki';
  RAISE NOTICE '  Password: Burgerek2137';
  RAISE NOTICE '═══════════════════════════════════════════════';
END $$;
