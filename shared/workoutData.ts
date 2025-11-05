import { Workout } from "./schema";

// Real workout data from Block 1.1 (Weeks 1-2)
export const workoutData: Workout[] = [
  // Week 1
  {
    week: 1,
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
    week: 1,
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
    week: 1,
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
    week: 1,
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
    week: 1,
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
  // Week 2
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
