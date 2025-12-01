-- Import workout data for bartoszkawecki user
-- This script imports the backup data from workout_tracker_backup_20251201_193606.sql

-- Step 1: Get the bartoszkawecki user ID
DO $$
DECLARE
  bartosz_user_id UUID;
BEGIN
  -- Get the user_id
  SELECT id INTO bartosz_user_id
  FROM auth.users
  WHERE email = 'bartoszkawecki@workout.app';

  IF bartosz_user_id IS NULL THEN
    RAISE EXCEPTION 'User bartoszkawecki@workout.app not found. Please create the user first.';
  END IF;

  RAISE NOTICE 'Found user bartoszkawecki with ID: %', bartosz_user_id;

  -- Step 2: Delete any existing data for this user (clean slate)
  DELETE FROM public.completions WHERE user_id = bartosz_user_id;
  DELETE FROM public.exercise_weights WHERE user_id = bartosz_user_id;

  RAISE NOTICE 'Cleared existing data for user';

  -- Step 3: Import completions data
  INSERT INTO public.completions (user_id, week, day) VALUES
    (bartosz_user_id, 1, 1),
    (bartosz_user_id, 1, 2),
    (bartosz_user_id, 1, 3),
    (bartosz_user_id, 1, 4),
    (bartosz_user_id, 1, 5),
    (bartosz_user_id, 2, 1),
    (bartosz_user_id, 2, 2),
    (bartosz_user_id, 2, 3),
    (bartosz_user_id, 2, 4),
    (bartosz_user_id, 2, 5),
    (bartosz_user_id, 3, 1),
    (bartosz_user_id, 3, 2),
    (bartosz_user_id, 3, 3),
    (bartosz_user_id, 3, 4),
    (bartosz_user_id, 3, 5),
    (bartosz_user_id, 4, 1),
    (bartosz_user_id, 4, 2),
    (bartosz_user_id, 4, 3),
    (bartosz_user_id, 4, 4),
    (bartosz_user_id, 4, 5),
    (bartosz_user_id, 5, 1),
    (bartosz_user_id, 5, 2);

  RAISE NOTICE 'Imported % completion records', 22;

  -- Step 4: Import exercise_weights data
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

  RAISE NOTICE 'Imported % exercise weight records', 69;

  -- Step 5: Verify the import
  RAISE NOTICE '=== Import Summary ===';
  RAISE NOTICE 'Total completions for bartoszkawecki: %',
    (SELECT COUNT(*) FROM public.completions WHERE user_id = bartosz_user_id);
  RAISE NOTICE 'Total exercise weights for bartoszkawecki: %',
    (SELECT COUNT(*) FROM public.exercise_weights WHERE user_id = bartosz_user_id);

  RAISE NOTICE 'Import completed successfully!';
END $$;
