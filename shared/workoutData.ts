import { Workout } from "./schema";

// Sample workout data for Week 1-2 (Block 1.1)
// TODO: Replace with actual data from Excel files
export const workoutData: Workout[] = [
  // Week 1
  {
    week: 1,
    day: 1,
    exercises: [
      {
        name: "Goblet Squat",
        sets: [
          { reps: "10", rir: "2", rest: "90s" },
          { reps: "10", rir: "1-2", rest: "90s" },
          { reps: "10", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Dumbbell Bench Press",
        sets: [
          { reps: "10", rir: "2", rest: "90s" },
          { reps: "10", rir: "1-2", rest: "90s" },
          { reps: "10", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Lat Pulldown",
        sets: [
          { reps: "12", rir: "2", rest: "60s" },
          { reps: "12", rir: "1-2", rest: "60s" },
          { reps: "12", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Dumbbell Shoulder Press",
        sets: [
          { reps: "10", rir: "2", rest: "90s" },
          { reps: "10", rir: "1-2", rest: "90s" },
          { reps: "10", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Plank",
        sets: [
          { reps: "30s", rir: "2", rest: "60s" },
          { reps: "30s", rir: "1-2", rest: "60s" },
          { reps: "30s", rir: "1", rest: "60s" },
        ],
      },
    ],
  },
  {
    week: 1,
    day: 2,
    exercises: [
      {
        name: "Romanian Deadlift",
        sets: [
          { reps: "10", rir: "2", rest: "90s" },
          { reps: "10", rir: "1-2", rest: "90s" },
          { reps: "10", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Incline Dumbbell Press",
        sets: [
          { reps: "10", rir: "2", rest: "90s" },
          { reps: "10", rir: "1-2", rest: "90s" },
          { reps: "10", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Seated Cable Row",
        sets: [
          { reps: "12", rir: "2", rest: "60s" },
          { reps: "12", rir: "1-2", rest: "60s" },
          { reps: "12", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Lateral Raises",
        sets: [
          { reps: "15", rir: "2", rest: "60s" },
          { reps: "15", rir: "1-2", rest: "60s" },
          { reps: "15", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Bicycle Crunches",
        sets: [
          { reps: "20", rir: "2", rest: "60s" },
          { reps: "20", rir: "1-2", rest: "60s" },
          { reps: "20", rir: "1", rest: "60s" },
        ],
      },
    ],
  },
  {
    week: 1,
    day: 3,
    exercises: [
      {
        name: "Leg Press",
        sets: [
          { reps: "12", rir: "2", rest: "90s" },
          { reps: "12", rir: "1-2", rest: "90s" },
          { reps: "12", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Cable Fly",
        sets: [
          { reps: "12", rir: "2", rest: "60s" },
          { reps: "12", rir: "1-2", rest: "60s" },
          { reps: "12", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Face Pulls",
        sets: [
          { reps: "15", rir: "2", rest: "60s" },
          { reps: "15", rir: "1-2", rest: "60s" },
          { reps: "15", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Dumbbell Curl",
        sets: [
          { reps: "12", rir: "2", rest: "60s" },
          { reps: "12", rir: "1-2", rest: "60s" },
          { reps: "12", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Tricep Pushdown",
        sets: [
          { reps: "12", rir: "2", rest: "60s" },
          { reps: "12", rir: "1-2", rest: "60s" },
          { reps: "12", rir: "1", rest: "60s" },
        ],
      },
    ],
  },
  {
    week: 1,
    day: 4,
    exercises: [
      {
        name: "Bulgarian Split Squat",
        sets: [
          { reps: "10", rir: "2", rest: "90s" },
          { reps: "10", rir: "1-2", rest: "90s" },
          { reps: "10", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Machine Chest Press",
        sets: [
          { reps: "12", rir: "2", rest: "90s" },
          { reps: "12", rir: "1-2", rest: "90s" },
          { reps: "12", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Assisted Pull-ups",
        sets: [
          { reps: "8", rir: "2", rest: "90s" },
          { reps: "8", rir: "1-2", rest: "90s" },
          { reps: "8", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Arnold Press",
        sets: [
          { reps: "10", rir: "2", rest: "90s" },
          { reps: "10", rir: "1-2", rest: "90s" },
          { reps: "10", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Russian Twists",
        sets: [
          { reps: "30", rir: "2", rest: "60s" },
          { reps: "30", rir: "1-2", rest: "60s" },
          { reps: "30", rir: "1", rest: "60s" },
        ],
      },
    ],
  },
  {
    week: 1,
    day: 5,
    exercises: [
      {
        name: "Leg Curl",
        sets: [
          { reps: "12", rir: "2", rest: "60s" },
          { reps: "12", rir: "1-2", rest: "60s" },
          { reps: "12", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Push-ups",
        sets: [
          { reps: "15", rir: "2", rest: "60s" },
          { reps: "15", rir: "1-2", rest: "60s" },
          { reps: "15", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Dumbbell Row",
        sets: [
          { reps: "12", rir: "2", rest: "60s" },
          { reps: "12", rir: "1-2", rest: "60s" },
          { reps: "12", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Front Raises",
        sets: [
          { reps: "12", rir: "2", rest: "60s" },
          { reps: "12", rir: "1-2", rest: "60s" },
          { reps: "12", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Mountain Climbers",
        sets: [
          { reps: "20", rir: "2", rest: "60s" },
          { reps: "20", rir: "1-2", rest: "60s" },
          { reps: "20", rir: "1", rest: "60s" },
        ],
      },
    ],
  },
  // Week 2
  {
    week: 2,
    day: 1,
    exercises: [
      {
        name: "Goblet Squat",
        sets: [
          { reps: "12", rir: "2", rest: "90s" },
          { reps: "12", rir: "1-2", rest: "90s" },
          { reps: "12", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Dumbbell Bench Press",
        sets: [
          { reps: "12", rir: "2", rest: "90s" },
          { reps: "12", rir: "1-2", rest: "90s" },
          { reps: "12", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Lat Pulldown",
        sets: [
          { reps: "12", rir: "2", rest: "60s" },
          { reps: "12", rir: "1-2", rest: "60s" },
          { reps: "12", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Dumbbell Shoulder Press",
        sets: [
          { reps: "12", rir: "2", rest: "90s" },
          { reps: "12", rir: "1-2", rest: "90s" },
          { reps: "12", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Plank",
        sets: [
          { reps: "40s", rir: "2", rest: "60s" },
          { reps: "40s", rir: "1-2", rest: "60s" },
          { reps: "40s", rir: "1", rest: "60s" },
        ],
      },
    ],
  },
  {
    week: 2,
    day: 2,
    exercises: [
      {
        name: "Romanian Deadlift",
        sets: [
          { reps: "12", rir: "2", rest: "90s" },
          { reps: "12", rir: "1-2", rest: "90s" },
          { reps: "12", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Incline Dumbbell Press",
        sets: [
          { reps: "12", rir: "2", rest: "90s" },
          { reps: "12", rir: "1-2", rest: "90s" },
          { reps: "12", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Seated Cable Row",
        sets: [
          { reps: "12", rir: "2", rest: "60s" },
          { reps: "12", rir: "1-2", rest: "60s" },
          { reps: "12", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Lateral Raises",
        sets: [
          { reps: "15", rir: "2", rest: "60s" },
          { reps: "15", rir: "1-2", rest: "60s" },
          { reps: "15", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Bicycle Crunches",
        sets: [
          { reps: "25", rir: "2", rest: "60s" },
          { reps: "25", rir: "1-2", rest: "60s" },
          { reps: "25", rir: "1", rest: "60s" },
        ],
      },
    ],
  },
  {
    week: 2,
    day: 3,
    exercises: [
      {
        name: "Leg Press",
        sets: [
          { reps: "12", rir: "2", rest: "90s" },
          { reps: "12", rir: "1-2", rest: "90s" },
          { reps: "12", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Cable Fly",
        sets: [
          { reps: "12", rir: "2", rest: "60s" },
          { reps: "12", rir: "1-2", rest: "60s" },
          { reps: "12", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Face Pulls",
        sets: [
          { reps: "15", rir: "2", rest: "60s" },
          { reps: "15", rir: "1-2", rest: "60s" },
          { reps: "15", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Dumbbell Curl",
        sets: [
          { reps: "12", rir: "2", rest: "60s" },
          { reps: "12", rir: "1-2", rest: "60s" },
          { reps: "12", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Tricep Pushdown",
        sets: [
          { reps: "12", rir: "2", rest: "60s" },
          { reps: "12", rir: "1-2", rest: "60s" },
          { reps: "12", rir: "1", rest: "60s" },
        ],
      },
    ],
  },
  {
    week: 2,
    day: 4,
    exercises: [
      {
        name: "Bulgarian Split Squat",
        sets: [
          { reps: "12", rir: "2", rest: "90s" },
          { reps: "12", rir: "1-2", rest: "90s" },
          { reps: "12", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Machine Chest Press",
        sets: [
          { reps: "12", rir: "2", rest: "90s" },
          { reps: "12", rir: "1-2", rest: "90s" },
          { reps: "12", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Assisted Pull-ups",
        sets: [
          { reps: "10", rir: "2", rest: "90s" },
          { reps: "10", rir: "1-2", rest: "90s" },
          { reps: "10", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Arnold Press",
        sets: [
          { reps: "12", rir: "2", rest: "90s" },
          { reps: "12", rir: "1-2", rest: "90s" },
          { reps: "12", rir: "1", rest: "90s" },
        ],
      },
      {
        name: "Russian Twists",
        sets: [
          { reps: "35", rir: "2", rest: "60s" },
          { reps: "35", rir: "1-2", rest: "60s" },
          { reps: "35", rir: "1", rest: "60s" },
        ],
      },
    ],
  },
  {
    week: 2,
    day: 5,
    exercises: [
      {
        name: "Leg Curl",
        sets: [
          { reps: "12", rir: "2", rest: "60s" },
          { reps: "12", rir: "1-2", rest: "60s" },
          { reps: "12", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Push-ups",
        sets: [
          { reps: "20", rir: "2", rest: "60s" },
          { reps: "20", rir: "1-2", rest: "60s" },
          { reps: "20", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Dumbbell Row",
        sets: [
          { reps: "12", rir: "2", rest: "60s" },
          { reps: "12", rir: "1-2", rest: "60s" },
          { reps: "12", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Front Raises",
        sets: [
          { reps: "12", rir: "2", rest: "60s" },
          { reps: "12", rir: "1-2", rest: "60s" },
          { reps: "12", rir: "1", rest: "60s" },
        ],
      },
      {
        name: "Mountain Climbers",
        sets: [
          { reps: "25", rir: "2", rest: "60s" },
          { reps: "25", rir: "1-2", rest: "60s" },
          { reps: "25", rir: "1", rest: "60s" },
        ],
      },
    ],
  },
];

export function getWorkout(week: number, day: number): Workout | undefined {
  return workoutData.find((w) => w.week === week && w.day === day);
}

export function getAvailableWeeks(): number[] {
  return Array.from(new Set(workoutData.map((w) => w.week))).sort();
}

export function getDaysForWeek(week: number): number[] {
  return workoutData
    .filter((w) => w.week === week)
    .map((w) => w.day)
    .sort();
}
