import { Workout } from "./schema";

// Full 10-week workout program
export const workoutData: Workout[] = [
  {
    week: 1,
    day: 1,
    exercises: [
      {
        name: "Back Squat",
        sets: [
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "1", rest: "3-4 min" },
        ],
      },
      {
        name: "Chest Supported Row",
        sets: [
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "1", rest: "2-3 min" },
          { reps: "8", rir: "0", rest: "2-3 min" },
        ],
      },
      {
        name: "DB Lateral Raise",
        sets: [
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "1", rest: "1 min" },
          { reps: "10", rir: "0", rest: "1 min" },
        ],
      },
      {
        name: "EZ Bar Curl",
        sets: [
          { reps: "8", rir: "2", rest: "1 min" },
          { reps: "8", rir: "1", rest: "1 min" },
          { reps: "8", rir: "0", rest: "1 min" },
        ],
      },
      {
        name: "Decline Crunch (weighted)",
        sets: [
          { reps: "15", rir: "2", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
          { reps: "15", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Rear Delt Cable Flye",
        sets: [
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "1", rest: "1 min" },
          { reps: "10", rir: "0", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 1,
    day: 2,
    exercises: [
      {
        name: "Sumo Deadlift",
        sets: [
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "1", rest: "3-4 min" },
          { reps: "5", rir: "1", rest: "3-4 min" },
        ],
      },
      {
        name: "BB Bench Press",
        sets: [
          { reps: "6", rir: "2", rest: "2-3 min" },
          { reps: "6", rir: "2", rest: "2-3 min" },
          { reps: "6", rir: "1", rest: "2-3 min" },
          { reps: "6", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Extension",
        sets: [
          { reps: "8", rir: "2", rest: "1-2 min" },
          { reps: "8", rir: "2", rest: "1-2 min" },
          { reps: "8", rir: "1", rest: "1-2 min" },
          { reps: "8", rir: "0", rest: "1-2 min" },
        ],
      },
      {
        name: "DB Tricep Skull Crusher",
        sets: [
          { reps: "8", rir: "2", rest: "1 min" },
          { reps: "8", rir: "1", rest: "1 min" },
          { reps: "8", rir: "0", rest: "1 min" },
        ],
      },
      {
        name: "Smith Machine Calf Raise",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 1,
    day: 3,
    exercises: [
      {
        name: "Lat Pull-down",
        sets: [
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "1", rest: "2-3 min" },
          { reps: "8", rir: "0", rest: "2-3 min" },
        ],
      },
      {
        name: "BB Overhead Press",
        sets: [
          { reps: "6", rir: "2", rest: "2-3 min" },
          { reps: "6", rir: "2", rest: "2-3 min" },
          { reps: "6", rir: "1", rest: "2-3 min" },
          { reps: "6", rir: "0", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Curl",
        sets: [
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "1", rest: "1 min" },
          { reps: "10", rir: "0", rest: "1 min" },
        ],
      },
      {
        name: "Incline Cable Flye",
        sets: [
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
          { reps: "12", rir: "0", rest: "1 min" },
        ],
      },
      {
        name: "Reverse Crunch",
        sets: [
          { reps: "10", rir: "-", rest: "1 min" },
          { reps: "10", rir: "-", rest: "1 min" },
          { reps: "10", rir: "-", rest: "1 min" },
          { reps: "10", rir: "-", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 1,
    day: 4,
    exercises: [
      {
        name: "BB Bench Press",
        sets: [
          { reps: "6", rir: "2", rest: "2-3 min" },
          { reps: "6", rir: "2", rest: "2-3 min" },
          { reps: "6", rir: "1", rest: "2-3 min" },
          { reps: "6", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Back Squat",
        sets: [
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "1", rest: "3-4 min" },
          { reps: "5", rir: "1", rest: "3-4 min" },
        ],
      },
      {
        name: "Chest Supported Row",
        sets: [
          { reps: "8", rir: "2", rest: "1-2 min" },
          { reps: "8", rir: "2", rest: "1-2 min" },
          { reps: "8", rir: "1", rest: "1-2 min" },
          { reps: "8", rir: "0", rest: "1-2 min" },
        ],
      },
      {
        name: "Cable Lateral Raise",
        sets: [
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "1", rest: "1 min" },
          { reps: "10", rir: "0", rest: "1 min" },
        ],
      },
      {
        name: "Seated Calf Press",
        sets: [
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
          { reps: "12", rir: "0", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 1,
    day: 5,
    exercises: [
      {
        name: "BB Overhead Press",
        sets: [
          { reps: "6", rir: "2", rest: "2-3 min" },
          { reps: "6", rir: "2", rest: "2-3 min" },
          { reps: "6", rir: "1", rest: "2-3 min" },
          { reps: "6", rir: "0", rest: "2-3 min" },
        ],
      },
      {
        name: "Sumo Deadlift",
        sets: [
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "1", rest: "3-4 min" },
          { reps: "5", rir: "1", rest: "3-4 min" },
        ],
      },
      {
        name: "Lat Pull-down",
        sets: [
          { reps: "8", rir: "2", rest: "1-2 min" },
          { reps: "8", rir: "1", rest: "1-2 min" },
          { reps: "8", rir: "0", rest: "1-2 min" },
        ],
      },
      {
        name: "Cable Pushdown",
        sets: [
          { reps: "8", rir: "2", rest: "1 min" },
          { reps: "8", rir: "1", rest: "1 min" },
          { reps: "8", rir: "0", rest: "1 min" },
        ],
      },
      {
        name: "DB Curl",
        sets: [
          { reps: "16", rir: "2", rest: "1 min" },
          { reps: "16", rir: "1", rest: "1 min" },
          { reps: "16", rir: "0", rest: "1 min" },
        ],
      },
      {
        name: "Standing Cable Flye",
        sets: [
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
          { reps: "12", rir: "0", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 2,
    day: 1,
    exercises: [
      {
        name: "Leg Press",
        sets: [
          { reps: "10", rir: "4", rest: "2-3 min" },
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "3", rest: "2-3 min" },
        ],
      },
      {
        name: "Smith Machine Bench Press",
        sets: [
          { reps: "12", rir: "4", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
        ],
      },
      {
        name: "Chest Supported Row",
        sets: [
          { reps: "12", rir: "4", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
        ],
      },
      {
        name: "DB Lateral Raise",
        sets: [
          { reps: "15", rir: "4", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
        ],
      },
      {
        name: "Decline Crunch (no weight)",
        sets: [
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
        ],
      },
      {
        name: "Smith Machine Calf Raise",
        sets: [
          { reps: "20", rir: "4", rest: "1 min" },
          { reps: "20", rir: "3", rest: "1 min" },
          { reps: "20", rir: "3", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 2,
    day: 2,
    exercises: [
      {
        name: "Smith Machine Shoulder Press",
        sets: [
          { reps: "12", rir: "4", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
        ],
      },
      {
        name: "Lat Pull-down",
        sets: [
          { reps: "12", rir: "4", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Curl",
        sets: [
          { reps: "12", rir: "4", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
        ],
      },
      {
        name: "Pec Deck/Pec Flye Machine",
        sets: [
          { reps: "12", rir: "4", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
        ],
      },
      {
        name: "Cable Pushdown",
        sets: [
          { reps: "15", rir: "4", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 2,
    day: 3,
    exercises: [
      {
        name: "Seated Cable Row",
        sets: [
          { reps: "12", rir: "4", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
        ],
      },
      {
        name: "Walking DB Lunges",
        sets: [
          { reps: "30", rir: "4", rest: "2-3 min" },
          { reps: "30", rir: "3", rest: "2-3 min" },
          { reps: "30", rir: "3", rest: "2-3 min" },
          { reps: "30", rir: "3", rest: "2-3 min" },
        ],
      },
      {
        name: "Cable Upright Row",
        sets: [
          { reps: "12", rir: "4", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
        ],
      },
      {
        name: "Lying Leg Raise",
        sets: [
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
        ],
      },
      {
        name: "DB Bicep Curl",
        sets: [
          { reps: "30", rir: "4", rest: "1 min" },
          { reps: "30", rir: "3", rest: "1 min" },
          { reps: "30", rir: "3", rest: "1 min" },
          { reps: "30", rir: "3", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 2,
    day: 4,
    exercises: [
      {
        name: "Incline DB Press",
        sets: [
          { reps: "12", rir: "4", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Extension",
        sets: [
          { reps: "12", rir: "4", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
        ],
      },
      {
        name: "Hyperextension",
        sets: [
          { reps: "12", rir: "4", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
        ],
      },
      {
        name: "Smith Machine Calf Raise",
        sets: [
          { reps: "15", rir: "4", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
        ],
      },
      {
        name: "Cable Lateral Raise",
        sets: [
          { reps: "12", rir: "4", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 2,
    day: 5,
    exercises: [
      {
        name: "Lat Pull-down",
        sets: [
          { reps: "12", rir: "4", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
        ],
      },
      {
        name: "Alternate DB Shoulder Press",
        sets: [
          { reps: "24", rir: "4", rest: "2-3 min" },
          { reps: "24", rir: "3", rest: "2-3 min" },
          { reps: "24", rir: "3", rest: "2-3 min" },
          { reps: "24", rir: "3", rest: "2-3 min" },
        ],
      },
      {
        name: "BB Hip Thrust",
        sets: [
          { reps: "12", rir: "4", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
        ],
      },
      {
        name: "Standing Cable Chest Flye",
        sets: [
          { reps: "12", rir: "4", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
        ],
      },
      {
        name: "Cable Pushdown",
        sets: [
          { reps: "12", rir: "4", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
        ],
      },
      {
        name: "DB Bicep Curl",
        sets: [
          { reps: "24", rir: "4", rest: "1 min" },
          { reps: "24", rir: "3", rest: "1 min" },
          { reps: "24", rir: "3", rest: "1 min" },
          { reps: "24", rir: "3", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 3,
    day: 1,
    exercises: [
      {
        name: "Smith Machine Squat",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "BB Bench Press",
        sets: [
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Seated Cable Row",
        sets: [
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "2", rest: "1-2 min" },
        ],
      },
      {
        name: "DB Lateral Raise",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Decline Crunch (no weight)",
        sets: [
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
        ],
      },
      {
        name: "Smith Machine Calf Raise",
        sets: [
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 3,
    day: 2,
    exercises: [
      {
        name: "BB Overhead Press",
        sets: [
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Lat Pull-down (close grip)",
        sets: [
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Curl",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Pec Deck",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Cable Pushdown",
        sets: [
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 3,
    day: 3,
    exercises: [
      {
        name: "Chest Supported Row",
        sets: [
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "2", rest: "1-2 min" },
        ],
      },
      {
        name: "Walking DB Lunges",
        sets: [
          { reps: "30", rir: "3", rest: "2-3 min" },
          { reps: "30", rir: "3", rest: "2-3 min" },
          { reps: "30", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "EZ Bar Upright Row",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Lying Leg Raise",
        sets: [
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
        ],
      },
      {
        name: "DB Bicep Curl",
        sets: [
          { reps: "30", rir: "3", rest: "1 min" },
          { reps: "30", rir: "3", rest: "1 min" },
          { reps: "30", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 3,
    day: 4,
    exercises: [
      {
        name: "Sumo Deadlift",
        sets: [
          { reps: "8", rir: "4", rest: "3-4 min" },
          { reps: "8", rir: "4", rest: "3-4 min" },
          { reps: "8", rir: "4", rest: "3-4 min" },
          { reps: "8", rir: "3", rest: "3-4 min" },
        ],
      },
      {
        name: "Incline DB Press",
        sets: [
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Extension",
        sets: [
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "2", rest: "1-2 min" },
        ],
      },
      {
        name: "Smith Machine Calf Raise",
        sets: [
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Cable Lateral Raise",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 3,
    day: 5,
    exercises: [
      {
        name: "Lat Pull-down (wide grip)",
        sets: [
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Alternate DB Shoulder Press",
        sets: [
          { reps: "20", rir: "3", rest: "2-3 min" },
          { reps: "20", rir: "3", rest: "2-3 min" },
          { reps: "20", rir: "3", rest: "2-3 min" },
          { reps: "20", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "BB Hip Thrust",
        sets: [
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "2", rest: "1-2 min" },
        ],
      },
      {
        name: "Standing Cable Chest Flye",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Cable Pushdown",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "DB Bicep Curl",
        sets: [
          { reps: "24", rir: "3", rest: "1 min" },
          { reps: "24", rir: "3", rest: "1 min" },
          { reps: "24", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 4,
    day: 1,
    exercises: [
      {
        name: "Smith Machine Squat",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "BB Bench Press",
        sets: [
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Seated Cable Row",
        sets: [
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "2", rest: "1-2 min" },
        ],
      },
      {
        name: "DB Lateral Raise",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Decline Crunch (no weight)",
        sets: [
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
        ],
      },
      {
        name: "Smith Machine Calf Raise",
        sets: [
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 4,
    day: 2,
    exercises: [
      {
        name: "BB Overhead Press",
        sets: [
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Lat Pull-down (close grip)",
        sets: [
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Curl",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Pec Deck",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Cable Pushdown",
        sets: [
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 4,
    day: 3,
    exercises: [
      {
        name: "Chest Supported Row",
        sets: [
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "2", rest: "1-2 min" },
        ],
      },
      {
        name: "Walking DB Lunges",
        sets: [
          { reps: "30", rir: "3", rest: "2-3 min" },
          { reps: "30", rir: "3", rest: "2-3 min" },
          { reps: "30", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "EZ Bar Upright Row",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Lying Leg Raise",
        sets: [
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
        ],
      },
      {
        name: "DB Bicep Curl",
        sets: [
          { reps: "30", rir: "3", rest: "1 min" },
          { reps: "30", rir: "3", rest: "1 min" },
          { reps: "30", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 4,
    day: 4,
    exercises: [
      {
        name: "Sumo Deadlift",
        sets: [
          { reps: "8", rir: "4", rest: "3-4 min" },
          { reps: "8", rir: "4", rest: "3-4 min" },
          { reps: "8", rir: "4", rest: "3-4 min" },
          { reps: "8", rir: "3", rest: "3-4 min" },
        ],
      },
      {
        name: "Incline DB Press",
        sets: [
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Extension",
        sets: [
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "2", rest: "1-2 min" },
        ],
      },
      {
        name: "Smith Machine Calf Raise",
        sets: [
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Cable Lateral Raise",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 4,
    day: 5,
    exercises: [
      {
        name: "Lat Pull-down (wide grip)",
        sets: [
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Alternate DB Shoulder Press",
        sets: [
          { reps: "20", rir: "3", rest: "2-3 min" },
          { reps: "20", rir: "3", rest: "2-3 min" },
          { reps: "20", rir: "3", rest: "2-3 min" },
          { reps: "20", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "BB Hip Thrust",
        sets: [
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "2", rest: "1-2 min" },
        ],
      },
      {
        name: "Standing Cable Chest Flye",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Cable Pushdown",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "DB Bicep Curl",
        sets: [
          { reps: "24", rir: "3", rest: "1 min" },
          { reps: "24", rir: "3", rest: "1 min" },
          { reps: "24", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 5,
    day: 1,
    exercises: [
      {
        name: "Back Squat",
        sets: [
          { reps: "10", rir: "4", rest: "3-4 min" },
          { reps: "10", rir: "4", rest: "3-4 min" },
          { reps: "10", rir: "4", rest: "3-4 min" },
          { reps: "10", rir: "3", rest: "3-4 min" },
        ],
      },
      {
        name: "BB Bench Press",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Chest supported Row",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "DB Lateral Raise",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Kneeling Cable Crunch",
        sets: [
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Single Leg DB Calf Raise",
        sets: [
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 5,
    day: 2,
    exercises: [
      {
        name: "BB Overhead Press",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Lat Pull-down",
        sets: [
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Extension",
        sets: [
          { reps: "10", rir: "3", rest: "1 min" },
          { reps: "10", rir: "3", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Standing Cable Chest Flye",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Cable Pushdown",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 5,
    day: 3,
    exercises: [
      {
        name: "Sumo Deadlift",
        sets: [
          { reps: "8", rir: "3", rest: "3-4 min" },
          { reps: "8", rir: "3", rest: "3-4 min" },
          { reps: "8", rir: "3", rest: "3-4 min" },
          { reps: "8", rir: "2", rest: "3-4 min" },
        ],
      },
      {
        name: "Incline DB Press",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Curl",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "EZ Bar Curl",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Cable Lateral Raise",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 5,
    day: 4,
    exercises: [
      {
        name: "T-bar Row",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Bulgarian Split Squat",
        sets: [
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Incline Cable Chest Flye",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Cable Overhead Extension",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Reverse Crunch",
        sets: [
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
        ],
      },
      {
        name: "Seated Calf Press",
        sets: [
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 5,
    day: 5,
    exercises: [
      {
        name: "Lat Pull-down",
        sets: [
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Alternate DB Shoulder Press",
        sets: [
          { reps: "20", rir: "3", rest: "2-3 min" },
          { reps: "20", rir: "3", rest: "2-3 min" },
          { reps: "20", rir: "2", rest: "2-3 min" },
          { reps: "20", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Romanian Deadlift",
        sets: [
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "2", rest: "1-2 min" },
          { reps: "12", rir: "2", rest: "1-2 min" },
        ],
      },
      {
        name: "DB Bicep Curl",
        sets: [
          { reps: "24", rir: "3", rest: "1 min" },
          { reps: "24", rir: "2", rest: "1 min" },
          { reps: "24", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Reverse Pec Deck",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 6,
    day: 1,
    exercises: [
      {
        name: "Back Squat",
        sets: [
          { reps: "10", rir: "4", rest: "3-4 min" },
          { reps: "10", rir: "4", rest: "3-4 min" },
          { reps: "10", rir: "4", rest: "3-4 min" },
          { reps: "10", rir: "3", rest: "3-4 min" },
        ],
      },
      {
        name: "BB Bench Press",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Chest supported Row",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "DB Lateral Raise",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Kneeling Cable Crunch",
        sets: [
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Single Leg DB Calf Raise",
        sets: [
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 6,
    day: 2,
    exercises: [
      {
        name: "BB Overhead Press",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Lat Pull-down",
        sets: [
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Extension",
        sets: [
          { reps: "10", rir: "3", rest: "1 min" },
          { reps: "10", rir: "3", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Standing Cable Chest Flye",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Cable Pushdown",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 6,
    day: 3,
    exercises: [
      {
        name: "Sumo Deadlift",
        sets: [
          { reps: "8", rir: "3", rest: "3-4 min" },
          { reps: "8", rir: "3", rest: "3-4 min" },
          { reps: "8", rir: "3", rest: "3-4 min" },
          { reps: "8", rir: "2", rest: "3-4 min" },
        ],
      },
      {
        name: "Incline DB Press",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Curl",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "EZ Bar Curl",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Cable Lateral Raise",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 6,
    day: 4,
    exercises: [
      {
        name: "T-bar Row",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Bulgarian Split Squat",
        sets: [
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Incline Cable Chest Flye",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Cable Overhead Extension",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Reverse Crunch",
        sets: [
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
        ],
      },
      {
        name: "Seated Calf Press",
        sets: [
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 6,
    day: 5,
    exercises: [
      {
        name: "Lat Pull-down",
        sets: [
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "3", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
          { reps: "12", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Alternate DB Shoulder Press",
        sets: [
          { reps: "20", rir: "3", rest: "2-3 min" },
          { reps: "20", rir: "3", rest: "2-3 min" },
          { reps: "20", rir: "2", rest: "2-3 min" },
          { reps: "20", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Romanian Deadlift",
        sets: [
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "3", rest: "1-2 min" },
          { reps: "12", rir: "2", rest: "1-2 min" },
          { reps: "12", rir: "2", rest: "1-2 min" },
        ],
      },
      {
        name: "DB Bicep Curl",
        sets: [
          { reps: "24", rir: "3", rest: "1 min" },
          { reps: "24", rir: "2", rest: "1 min" },
          { reps: "24", rir: "2", rest: "1 min" },
        ],
      },
      {
        name: "Reverse Pec Deck",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 7,
    day: 1,
    exercises: [
      {
        name: "Back Squat",
        sets: [
          { reps: "8", rir: "3", rest: "3-4 min" },
          { reps: "8", rir: "3", rest: "3-4 min" },
          { reps: "8", rir: "3", rest: "3-4 min" },
          { reps: "8", rir: "2", rest: "3-4 min" },
        ],
      },
      {
        name: "BB Bench Press",
        sets: [
          { reps: "8", rir: "3", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Chest supported Row",
        sets: [
          { reps: "10", rir: "3", rest: "1-2 min" },
          { reps: "10", rir: "2", rest: "1-2 min" },
          { reps: "10", rir: "1", rest: "1-2 min" },
        ],
      },
      {
        name: "DB Lateral Raise",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Kneeling Cable Crunch",
        sets: [
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
        ],
      },
      {
        name: "Single Leg DB Calf Raise",
        sets: [
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
          { reps: "15", rir: "1", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 7,
    day: 2,
    exercises: [
      {
        name: "BB Overhead Press",
        sets: [
          { reps: "8", rir: "3", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Lat Pull-down (close grip)",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Extension",
        sets: [
          { reps: "10", rir: "3", rest: "1-2 min" },
          { reps: "10", rir: "2", rest: "1-2 min" },
          { reps: "10", rir: "2", rest: "1-2 min" },
          { reps: "10", rir: "1", rest: "1-2 min" },
        ],
      },
      {
        name: "Standing Cable Chest Flye",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Cable Pushdown",
        sets: [
          { reps: "10", rir: "3", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "1", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 7,
    day: 3,
    exercises: [
      {
        name: "Sumo Deadlift",
        sets: [
          { reps: "8", rir: "3", rest: "3-4 min" },
          { reps: "8", rir: "2", rest: "3-4 min" },
          { reps: "8", rir: "2", rest: "3-4 min" },
          { reps: "8", rir: "2", rest: "3-4 min" },
        ],
      },
      {
        name: "Incline DB Press",
        sets: [
          { reps: "8", rir: "3", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Curl",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "EZ Bar Curl",
        sets: [
          { reps: "10", rir: "3", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Cable Lateral Raise",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 7,
    day: 4,
    exercises: [
      {
        name: "T-bar Row",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Bulgarian Split Squat",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Incline Cable Chest Flye",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Cable Overhead Extension",
        sets: [
          { reps: "10", rir: "3", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Reverse Crunch",
        sets: [
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
        ],
      },
      {
        name: "Seated Calf Press",
        sets: [
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
          { reps: "15", rir: "1", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 7,
    day: 5,
    exercises: [
      {
        name: "Lat Pull-down (wide grip)",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Alternate DB Shoulder Press",
        sets: [
          { reps: "16", rir: "3", rest: "2-3 min" },
          { reps: "16", rir: "2", rest: "2-3 min" },
          { reps: "16", rir: "2", rest: "2-3 min" },
          { reps: "16", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Romanian Deadlift",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "DB Curl",
        sets: [
          { reps: "20", rir: "3", rest: "1 min" },
          { reps: "20", rir: "2", rest: "1 min" },
          { reps: "20", rir: "2", rest: "1 min" },
          { reps: "20", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Reverse Pec Deck",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 8,
    day: 1,
    exercises: [
      {
        name: "Back Squat",
        sets: [
          { reps: "8", rir: "3", rest: "3-4 min" },
          { reps: "8", rir: "3", rest: "3-4 min" },
          { reps: "8", rir: "3", rest: "3-4 min" },
          { reps: "8", rir: "2", rest: "3-4 min" },
        ],
      },
      {
        name: "BB Bench Press",
        sets: [
          { reps: "8", rir: "3", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Chest supported Row",
        sets: [
          { reps: "10", rir: "3", rest: "1-2 min" },
          { reps: "10", rir: "2", rest: "1-2 min" },
          { reps: "10", rir: "1", rest: "1-2 min" },
        ],
      },
      {
        name: "DB Lateral Raise",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Kneeling Cable Crunch",
        sets: [
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
        ],
      },
      {
        name: "Single Leg DB Calf Raise",
        sets: [
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
          { reps: "15", rir: "1", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 8,
    day: 2,
    exercises: [
      {
        name: "BB Overhead Press",
        sets: [
          { reps: "8", rir: "3", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
        ],
      },
      {
        name: "Lat Pull-down (close grip)",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Extension",
        sets: [
          { reps: "10", rir: "3", rest: "1-2 min" },
          { reps: "10", rir: "2", rest: "1-2 min" },
          { reps: "10", rir: "2", rest: "1-2 min" },
          { reps: "10", rir: "1", rest: "1-2 min" },
        ],
      },
      {
        name: "Standing Cable Chest Flye",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Cable Pushdown",
        sets: [
          { reps: "10", rir: "3", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "1", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 8,
    day: 3,
    exercises: [
      {
        name: "Sumo Deadlift",
        sets: [
          { reps: "8", rir: "3", rest: "3-4 min" },
          { reps: "8", rir: "2", rest: "3-4 min" },
          { reps: "8", rir: "2", rest: "3-4 min" },
          { reps: "8", rir: "2", rest: "3-4 min" },
        ],
      },
      {
        name: "Incline DB Press",
        sets: [
          { reps: "8", rir: "3", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Curl",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "EZ Bar Curl",
        sets: [
          { reps: "10", rir: "3", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Cable Lateral Raise",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 8,
    day: 4,
    exercises: [
      {
        name: "T-bar Row",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Bulgarian Split Squat",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Incline Cable Chest Flye",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Cable Overhead Extension",
        sets: [
          { reps: "10", rir: "3", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Reverse Crunch",
        sets: [
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
        ],
      },
      {
        name: "Seated Calf Press",
        sets: [
          { reps: "15", rir: "3", rest: "1 min" },
          { reps: "15", rir: "2", rest: "1 min" },
          { reps: "15", rir: "1", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 8,
    day: 5,
    exercises: [
      {
        name: "Lat Pull-down (wide grip)",
        sets: [
          { reps: "10", rir: "3", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "2", rest: "2-3 min" },
          { reps: "10", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Alternate DB Shoulder Press",
        sets: [
          { reps: "16", rir: "3", rest: "2-3 min" },
          { reps: "16", rir: "2", rest: "2-3 min" },
          { reps: "16", rir: "2", rest: "2-3 min" },
          { reps: "16", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Romanian Deadlift",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "DB Curl",
        sets: [
          { reps: "20", rir: "3", rest: "1 min" },
          { reps: "20", rir: "2", rest: "1 min" },
          { reps: "20", rir: "2", rest: "1 min" },
          { reps: "20", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Reverse Pec Deck",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 9,
    day: 1,
    exercises: [
      {
        name: "Back Squat",
        sets: [
          { reps: "5", rir: "3", rest: "3-4 min" },
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "2", rest: "3-4 min" },
        ],
      },
      {
        name: "Chest Supported Row",
        sets: [
          { reps: "8", rir: "3", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "DB Lateral Raise",
        sets: [
          { reps: "10", rir: "3", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "EZ Bar Curl",
        sets: [
          { reps: "8", rir: "3", rest: "1 min" },
          { reps: "8", rir: "2", rest: "1 min" },
          { reps: "8", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Decline Crunch (no weight)",
        sets: [
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
          { reps: "15", rir: "-", rest: "1 min" },
        ],
      },
      {
        name: "Rear Delt Cable Flye",
        sets: [
          { reps: "10", rir: "3", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "1", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 9,
    day: 2,
    exercises: [
      {
        name: "Sumo Deadlift",
        sets: [
          { reps: "5", rir: "3", rest: "3-4 min" },
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "2", rest: "3-4 min" },
        ],
      },
      {
        name: "BB Bench Press",
        sets: [
          { reps: "6", rir: "3", rest: "2-3 min" },
          { reps: "6", rir: "2", rest: "2-3 min" },
          { reps: "6", rir: "2", rest: "2-3 min" },
          { reps: "6", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Extension",
        sets: [
          { reps: "8", rir: "3", rest: "1-2 min" },
          { reps: "8", rir: "2", rest: "1-2 min" },
          { reps: "8", rir: "2", rest: "1-2 min" },
          { reps: "8", rir: "1", rest: "1-2 min" },
        ],
      },
      {
        name: "DB Tricep Skullcrusher",
        sets: [
          { reps: "8", rir: "2", rest: "1 min" },
          { reps: "8", rir: "2", rest: "1 min" },
          { reps: "8", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Smith Machine Calf Raise",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 9,
    day: 3,
    exercises: [
      {
        name: "Lat Pull-down",
        sets: [
          { reps: "8", rir: "3", rest: "2-3 min" },
          { reps: "8", rir: "2", rest: "2-3 min" },
          { reps: "8", rir: "1", rest: "2-3 min" },
          { reps: "8", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "BB Overhead Press",
        sets: [
          { reps: "6", rir: "3", rest: "2-3 min" },
          { reps: "6", rir: "2", rest: "2-3 min" },
          { reps: "6", rir: "1", rest: "2-3 min" },
          { reps: "6", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Leg Curl",
        sets: [
          { reps: "10", rir: "3", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Incline Cable Chest Flye",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Reverse Crunch",
        sets: [
          { reps: "10", rir: "-", rest: "1 min" },
          { reps: "10", rir: "-", rest: "1 min" },
          { reps: "10", rir: "-", rest: "1 min" },
          { reps: "10", rir: "-", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 9,
    day: 4,
    exercises: [
      {
        name: "BB Bench Press",
        sets: [
          { reps: "6", rir: "3", rest: "2-3 min" },
          { reps: "6", rir: "2", rest: "2-3 min" },
          { reps: "6", rir: "1", rest: "2-3 min" },
          { reps: "6", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Back Squat",
        sets: [
          { reps: "5", rir: "3", rest: "3-4 min" },
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "1", rest: "3-4 min" },
        ],
      },
      {
        name: "Chest Supported Row",
        sets: [
          { reps: "8", rir: "3", rest: "1-2 min" },
          { reps: "8", rir: "2", rest: "1-2 min" },
          { reps: "8", rir: "2", rest: "1-2 min" },
          { reps: "8", rir: "1", rest: "1-2 min" },
        ],
      },
      {
        name: "Cable Lateral Raise",
        sets: [
          { reps: "10", rir: "3", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "2", rest: "1 min" },
          { reps: "10", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Seated Calf Press",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
        ],
      },
    ],
  },
  {
    week: 9,
    day: 5,
    exercises: [
      {
        name: "BB Overhead Press",
        sets: [
          { reps: "6", rir: "3", rest: "2-3 min" },
          { reps: "6", rir: "2", rest: "2-3 min" },
          { reps: "6", rir: "1", rest: "2-3 min" },
          { reps: "6", rir: "1", rest: "2-3 min" },
        ],
      },
      {
        name: "Sumo Deadlift",
        sets: [
          { reps: "5", rir: "3", rest: "3-4 min" },
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "2", rest: "3-4 min" },
          { reps: "5", rir: "2", rest: "3-4 min" },
        ],
      },
      {
        name: "Lat Pull-down",
        sets: [
          { reps: "8", rir: "3", rest: "1-2 min" },
          { reps: "8", rir: "2", rest: "1-2 min" },
          { reps: "8", rir: "1", rest: "1-2 min" },
          { reps: "8", rir: "1", rest: "1-2 min" },
        ],
      },
      {
        name: "Cable Pushdown",
        sets: [
          { reps: "8", rir: "3", rest: "1 min" },
          { reps: "8", rir: "2", rest: "1 min" },
          { reps: "8", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "DB Bicep Curl",
        sets: [
          { reps: "16", rir: "3", rest: "1 min" },
          { reps: "16", rir: "2", rest: "1 min" },
          { reps: "16", rir: "1", rest: "1 min" },
        ],
      },
      {
        name: "Standing Cable Chest Flye",
        sets: [
          { reps: "12", rir: "3", rest: "1 min" },
          { reps: "12", rir: "2", rest: "1 min" },
          { reps: "12", rir: "1", rest: "1 min" },
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
