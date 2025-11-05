// Auto-generated from full_10_week_program_clean_1762366109040.json

export interface Exercise {
  name: string;
  sets: { reps: number; rir: number | null }[];
  rest: string;
}

export interface DayWorkout {
  dayNumber: number;
  exercises: Exercise[];
}

export interface WeekData {
  weekNumber: number;
  block: string;
  days: DayWorkout[];
}

export const workoutData: WeekData[] = [
  {
    weekNumber: 1,
    block: 'Block 1.1',
    days: [
      {
        dayNumber: 1,
        exercises: [
          {
            name: 'Leg Press',
            sets: [{ reps: 10, rir: 4 }, { reps: 10, rir: 3 }, { reps: 10, rir: 3 }, { reps: 10, rir: 3 }],
            rest: '2-3'
          },
          {
            name: 'Smith Machine Bench Press',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '2-3'
          },
          {
            name: 'Chest Supported Row',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1-2'
          },
          {
            name: 'DB Lateral Raise',
            sets: [{ reps: 15, rir: 4 }, { reps: 15, rir: 3 }, { reps: 15, rir: 3 }],
            rest: '1'
          },
          {
            name: 'Decline Crunch (No Weight)',
            sets: [{ reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }],
            rest: '1'
          },
          {
            name: 'Smith Machine Calf Raise',
            sets: [{ reps: 20, rir: 4 }, { reps: 20, rir: 3 }, { reps: 20, rir: 3 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 2,
        exercises: [
          {
            name: 'Smith Machine Shoulder Press',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '2-3'
          },
          {
            name: 'Lat Pulldown',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '2-3'
          },
          {
            name: 'Leg Curl',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1'
          },
          {
            name: 'Pec Deck',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1'
          },
          {
            name: 'Cable Pushdown',
            sets: [{ reps: 15, rir: 4 }, { reps: 15, rir: 3 }, { reps: 15, rir: 3 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 3,
        exercises: [
          {
            name: 'Seated Cable Row',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1-2'
          },
          {
            name: 'DB Walking Lunge',
            sets: [{ reps: 30, rir: 4 }, { reps: 30, rir: 3 }, { reps: 30, rir: 3 }],
            rest: '2-3'
          },
          {
            name: 'Cable Upright Row',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1'
          },
          {
            name: 'Lying Leg Raise',
            sets: [{ reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }],
            rest: '1'
          },
          {
            name: 'DB Bicep Curl',
            sets: [{ reps: 30, rir: 4 }, { reps: 30, rir: 3 }, { reps: 30, rir: 3 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 4,
        exercises: [
          {
            name: 'Incline DB Press',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '2-3'
          },
          {
            name: 'Leg Extension',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1-2'
          },
          {
            name: 'Hyperextension',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1'
          },
          {
            name: 'Smith Machine Calf Raise',
            sets: [{ reps: 15, rir: 4 }, { reps: 15, rir: 3 }, { reps: 15, rir: 3 }, { reps: 15, rir: 3 }],
            rest: '1'
          },
          {
            name: 'Cable Lateral Raise',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 5,
        exercises: [
          {
            name: 'Lat Pulldown',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '2-3'
          },
          {
            name: 'Alternating DB Shoulder Press',
            sets: [{ reps: 24, rir: 4 }, { reps: 24, rir: 3 }, { reps: 24, rir: 3 }],
            rest: '2-3'
          },
          {
            name: 'BB Hip Thrust',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1-2'
          },
          {
            name: 'Standing Cable Chest Flye',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1'
          },
          {
            name: 'Cable Pushdown',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1'
          },
          {
            name: 'DB Bicep Curl',
            sets: [{ reps: 24, rir: 4 }, { reps: 24, rir: 3 }, { reps: 24, rir: 3 }],
            rest: '1'
          }
        ]
      }
    ]
  },
  {
    weekNumber: 2,
    block: 'Block 1.1',
    days: [
      {
        dayNumber: 1,
        exercises: [
          {
            name: 'Leg Press',
            sets: [{ reps: 10, rir: 4 }, { reps: 10, rir: 3 }, { reps: 10, rir: 3 }, { reps: 10, rir: 3 }],
            rest: '2-3'
          },
          {
            name: 'Smith Machine Bench Press',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '2-3'
          },
          {
            name: 'Chest Supported Row',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1-2'
          },
          {
            name: 'DB Lateral Raise',
            sets: [{ reps: 15, rir: 4 }, { reps: 15, rir: 3 }, { reps: 15, rir: 3 }],
            rest: '1'
          },
          {
            name: 'Decline Crunch (No Weight)',
            sets: [{ reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }],
            rest: '1'
          },
          {
            name: 'Smith Machine Calf Raise',
            sets: [{ reps: 20, rir: 4 }, { reps: 20, rir: 3 }, { reps: 20, rir: 3 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 2,
        exercises: [
          {
            name: 'Smith Machine Shoulder Press',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '2-3'
          },
          {
            name: 'Lat Pulldown',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '2-3'
          },
          {
            name: 'Leg Curl',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1'
          },
          {
            name: 'Pec Deck',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1'
          },
          {
            name: 'Cable Pushdown',
            sets: [{ reps: 15, rir: 4 }, { reps: 15, rir: 3 }, { reps: 15, rir: 3 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 3,
        exercises: [
          {
            name: 'Seated Cable Row',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1-2'
          },
          {
            name: 'DB Walking Lunge',
            sets: [{ reps: 30, rir: 4 }, { reps: 30, rir: 3 }, { reps: 30, rir: 3 }],
            rest: '2-3'
          },
          {
            name: 'Cable Upright Row',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1'
          },
          {
            name: 'Lying Leg Raise',
            sets: [{ reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }],
            rest: '1'
          },
          {
            name: 'DB Bicep Curl',
            sets: [{ reps: 30, rir: 4 }, { reps: 30, rir: 3 }, { reps: 30, rir: 3 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 4,
        exercises: [
          {
            name: 'Incline DB Press',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '2-3'
          },
          {
            name: 'Leg Extension',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1-2'
          },
          {
            name: 'Hyperextension',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1'
          },
          {
            name: 'Smith Machine Calf Raise',
            sets: [{ reps: 15, rir: 4 }, { reps: 15, rir: 3 }, { reps: 15, rir: 3 }, { reps: 15, rir: 3 }],
            rest: '1'
          },
          {
            name: 'Cable Lateral Raise',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 5,
        exercises: [
          {
            name: 'Lat Pulldown',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '2-3'
          },
          {
            name: 'Alternating DB Shoulder Press',
            sets: [{ reps: 24, rir: 4 }, { reps: 24, rir: 3 }, { reps: 24, rir: 3 }],
            rest: '2-3'
          },
          {
            name: 'BB Hip Thrust',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1-2'
          },
          {
            name: 'Standing Cable Chest Flye',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1'
          },
          {
            name: 'Cable Pushdown',
            sets: [{ reps: 12, rir: 4 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }],
            rest: '1'
          },
          {
            name: 'DB Bicep Curl',
            sets: [{ reps: 24, rir: 4 }, { reps: 24, rir: 3 }, { reps: 24, rir: 3 }],
            rest: '1'
          }
        ]
      }
    ]
  },
  {
    weekNumber: 3,
    block: 'Block 1.2',
    days: [
      {
        dayNumber: 1,
        exercises: [
          {
            name: 'Smith Machine Squat',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 3 }, { reps: 10, rir: 3 }, { reps: 10, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'BB Bench Press',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Seated Cable Row',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1-2'
          },
          {
            name: 'DB Lateral Raise',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Decline Crunch (No Weight)',
            sets: [{ reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }],
            rest: '1'
          },
          {
            name: 'Smith Machine Calf Raise',
            sets: [{ reps: 15, rir: 3 }, { reps: 15, rir: 3 }, { reps: 15, rir: 2 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 2,
        exercises: [
          {
            name: 'BB Overhead Press',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Lat Pull-down (close grip)',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Leg Curl',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Pec Deck',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Cable Pushdown',
            sets: [{ reps: 15, rir: 3 }, { reps: 15, rir: 3 }, { reps: 15, rir: 2 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 3,
        exercises: [
          {
            name: 'Chest Supported Row',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1-2'
          },
          {
            name: 'DB Walking Lunge',
            sets: [{ reps: 30, rir: 3 }, { reps: 30, rir: 3 }, { reps: 30, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Cable Upright Row',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Lying Leg Raise',
            sets: [{ reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }],
            rest: '1'
          },
          {
            name: 'DB Bicep Curl',
            sets: [{ reps: 30, rir: 3 }, { reps: 30, rir: 3 }, { reps: 30, rir: 2 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 4,
        exercises: [
          {
            name: 'Sumo Deadlift',
            sets: [{ reps: 8, rir: 4 }, { reps: 8, rir: 4 }, { reps: 8, rir: 4 }, { reps: 8, rir: 3 }],
            rest: '3-4'
          },
          {
            name: 'Incline DB Press',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Leg Extension',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1-2'
          },
          {
            name: 'Smith Machine Calf Raise',
            sets: [{ reps: 15, rir: 3 }, { reps: 15, rir: 3 }, { reps: 15, rir: 3 }, { reps: 15, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Cable Lateral Raise',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 5,
        exercises: [
          {
            name: 'Lat Pull-down (wide grip)',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Alternating DB Shoulder Press',
            sets: [{ reps: 20, rir: 3 }, { reps: 20, rir: 3 }, { reps: 20, rir: 3 }, { reps: 20, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'BB Hip Thrust',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1-2'
          },
          {
            name: 'Standing Cable Chest Flye',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Cable Pushdown',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'DB Bicep Curl',
            sets: [{ reps: 24, rir: 3 }, { reps: 24, rir: 3 }, { reps: 24, rir: 2 }],
            rest: '1'
          }
        ]
      }
    ]
  },
  {
    weekNumber: 4,
    block: 'Block 1.2',
    days: [
      {
        dayNumber: 1,
        exercises: [
          {
            name: 'Smith Machine Squat',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 3 }, { reps: 10, rir: 3 }, { reps: 10, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'BB Bench Press',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Seated Cable Row',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1-2'
          },
          {
            name: 'DB Lateral Raise',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Decline Crunch (No Weight)',
            sets: [{ reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }],
            rest: '1'
          },
          {
            name: 'Smith Machine Calf Raise',
            sets: [{ reps: 15, rir: 3 }, { reps: 15, rir: 3 }, { reps: 15, rir: 2 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 2,
        exercises: [
          {
            name: 'BB Overhead Press',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Lat Pull-down (close grip)',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Leg Curl',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Pec Deck',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Cable Pushdown',
            sets: [{ reps: 15, rir: 3 }, { reps: 15, rir: 3 }, { reps: 15, rir: 2 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 3,
        exercises: [
          {
            name: 'Chest Supported Row',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1-2'
          },
          {
            name: 'DB Walking Lunge',
            sets: [{ reps: 30, rir: 3 }, { reps: 30, rir: 3 }, { reps: 30, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Cable Upright Row',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Lying Leg Raise',
            sets: [{ reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }],
            rest: '1'
          },
          {
            name: 'DB Bicep Curl',
            sets: [{ reps: 30, rir: 3 }, { reps: 30, rir: 3 }, { reps: 30, rir: 2 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 4,
        exercises: [
          {
            name: 'Sumo Deadlift',
            sets: [{ reps: 8, rir: 4 }, { reps: 8, rir: 4 }, { reps: 8, rir: 4 }, { reps: 8, rir: 3 }],
            rest: '3-4'
          },
          {
            name: 'Incline DB Press',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Leg Extension',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1-2'
          },
          {
            name: 'Smith Machine Calf Raise',
            sets: [{ reps: 15, rir: 3 }, { reps: 15, rir: 3 }, { reps: 15, rir: 3 }, { reps: 15, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Cable Lateral Raise',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 5,
        exercises: [
          {
            name: 'Lat Pull-down (wide grip)',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Alternating DB Shoulder Press',
            sets: [{ reps: 20, rir: 3 }, { reps: 20, rir: 3 }, { reps: 20, rir: 3 }, { reps: 20, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'BB Hip Thrust',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1-2'
          },
          {
            name: 'Standing Cable Chest Flye',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Cable Pushdown',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'DB Bicep Curl',
            sets: [{ reps: 24, rir: 3 }, { reps: 24, rir: 3 }, { reps: 24, rir: 2 }],
            rest: '1'
          }
        ]
      }
    ]
  },
  {
    weekNumber: 5,
    block: 'Block 2.1',
    days: [
      {
        dayNumber: 1,
        exercises: [
          {
            name: 'Back Squat',
            sets: [{ reps: 10, rir: 4 }, { reps: 10, rir: 4 }, { reps: 10, rir: 4 }, { reps: 10, rir: 3 }],
            rest: '3-4'
          },
          {
            name: 'BB Bench Press',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Chest Supported Row',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'DB Lateral Raise',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Kneeling Cable Crunch',
            sets: [{ reps: 15, rir: 3 }, { reps: 15, rir: 3 }, { reps: 15, rir: 3 }, { reps: 15, rir: 2 }],
            rest: '1'
          },
          {
            name: 'DB Single-Leg Calf Raise',
            sets: [{ reps: 15, rir: 3 }, { reps: 15, rir: 2 }, { reps: 15, rir: 2 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 2,
        exercises: [
          {
            name: 'BB Overhead Press',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Lat Pulldown',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Leg Extension',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Standing Cable Chest Flye',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Cable Pushdown',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 3,
        exercises: [
          {
            name: 'Sumo Deadlift',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 3 }, { reps: 8, rir: 3 }, { reps: 8, rir: 2 }],
            rest: '3-4'
          },
          {
            name: 'Incline DB Press',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Leg Curl',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'EZ Bar Curl',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Cable Lateral Raise',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 4,
        exercises: [
          {
            name: 'T-Bar Row',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Bulgarian Split Squat',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Incline Cable Chest Flye',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Cable Overhead Extension',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Reverse Crunch',
            sets: [{ reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }],
            rest: '1'
          },
          {
            name: 'Seated Calf Press',
            sets: [{ reps: 15, rir: 3 }, { reps: 15, rir: 2 }, { reps: 15, rir: 2 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 5,
        exercises: [
          {
            name: 'Lat Pulldown',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Alternating DB Shoulder Press',
            sets: [{ reps: 20, rir: 3 }, { reps: 20, rir: 3 }, { reps: 20, rir: 2 }, { reps: 20, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Romanian Deadlift',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1-2'
          },
          {
            name: 'DB Bicep Curl',
            sets: [{ reps: 24, rir: 3 }, { reps: 24, rir: 2 }, { reps: 24, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Reverse Pec Deck',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          }
        ]
      }
    ]
  },
  {
    weekNumber: 6,
    block: 'Block 2.1',
    days: [
      {
        dayNumber: 1,
        exercises: [
          {
            name: 'Back Squat',
            sets: [{ reps: 10, rir: 4 }, { reps: 10, rir: 4 }, { reps: 10, rir: 4 }, { reps: 10, rir: 3 }],
            rest: '3-4'
          },
          {
            name: 'BB Bench Press',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Chest Supported Row',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'DB Lateral Raise',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Kneeling Cable Crunch',
            sets: [{ reps: 15, rir: 3 }, { reps: 15, rir: 3 }, { reps: 15, rir: 3 }, { reps: 15, rir: 2 }],
            rest: '1'
          },
          {
            name: 'DB Single-Leg Calf Raise',
            sets: [{ reps: 15, rir: 3 }, { reps: 15, rir: 2 }, { reps: 15, rir: 2 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 2,
        exercises: [
          {
            name: 'BB Overhead Press',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Lat Pulldown',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Leg Extension',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Standing Cable Chest Flye',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Cable Pushdown',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 3,
        exercises: [
          {
            name: 'Sumo Deadlift',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 3 }, { reps: 8, rir: 3 }, { reps: 8, rir: 2 }],
            rest: '3-4'
          },
          {
            name: 'Incline DB Press',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Leg Curl',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'EZ Bar Curl',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Cable Lateral Raise',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 4,
        exercises: [
          {
            name: 'T-Bar Row',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Bulgarian Split Squat',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Incline Cable Chest Flye',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Cable Overhead Extension',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Reverse Crunch',
            sets: [{ reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }],
            rest: '1'
          },
          {
            name: 'Seated Calf Press',
            sets: [{ reps: 15, rir: 3 }, { reps: 15, rir: 2 }, { reps: 15, rir: 2 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 5,
        exercises: [
          {
            name: 'Lat Pulldown',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Alternating DB Shoulder Press',
            sets: [{ reps: 20, rir: 3 }, { reps: 20, rir: 3 }, { reps: 20, rir: 2 }, { reps: 20, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Romanian Deadlift',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1-2'
          },
          {
            name: 'DB Bicep Curl',
            sets: [{ reps: 24, rir: 3 }, { reps: 24, rir: 2 }, { reps: 24, rir: 2 }],
            rest: '1'
          },
          {
            name: 'Reverse Pec Deck',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }],
            rest: '1'
          }
        ]
      }
    ]
  },
  {
    weekNumber: 7,
    block: 'Block 2.2',
    days: [
      {
        dayNumber: 1,
        exercises: [
          {
            name: 'Back Squat',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 3 }, { reps: 8, rir: 3 }, { reps: 8, rir: 2 }],
            rest: '3-4'
          },
          {
            name: 'BB Bench Press',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 2 }, { reps: 8, rir: 2 }, { reps: 8, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Chest Supported Row',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '1-2'
          },
          {
            name: 'DB Lateral Raise',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Kneeling Cable Crunch',
            sets: [{ reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }],
            rest: '1'
          },
          {
            name: 'DB Single-Leg Calf Raise',
            sets: [{ reps: 15, rir: 3 }, { reps: 15, rir: 2 }, { reps: 15, rir: 1 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 2,
        exercises: [
          {
            name: 'BB Overhead Press',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 2 }, { reps: 8, rir: 2 }, { reps: 8, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Lat Pull-down (close grip)',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Leg Extension',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '1-2'
          },
          {
            name: 'Standing Cable Chest Flye',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Cable Pushdown',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 3,
        exercises: [
          {
            name: 'Sumo Deadlift',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 2 }, { reps: 8, rir: 2 }, { reps: 8, rir: 2 }],
            rest: '3-4'
          },
          {
            name: 'Incline DB Press',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 2 }, { reps: 8, rir: 2 }, { reps: 8, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Leg Curl',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          },
          {
            name: 'EZ Bar Curl',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Cable Lateral Raise',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 4,
        exercises: [
          {
            name: 'T-Bar Row',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Bulgarian Split Squat',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Incline Cable Chest Flye',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Cable Overhead Extension',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Reverse Crunch',
            sets: [{ reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }],
            rest: '1'
          },
          {
            name: 'Seated Calf Press',
            sets: [{ reps: 15, rir: 3 }, { reps: 15, rir: 2 }, { reps: 15, rir: 1 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 5,
        exercises: [
          {
            name: 'Lat Pull-down (wide grip)',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Alternating DB Shoulder Press',
            sets: [{ reps: 16, rir: 3 }, { reps: 16, rir: 2 }, { reps: 16, rir: 2 }, { reps: 16, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Romanian Deadlift',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          },
          {
            name: 'DB Bicep Curl',
            sets: [{ reps: 20, rir: 3 }, { reps: 20, rir: 2 }, { reps: 20, rir: 2 }, { reps: 20, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Reverse Pec Deck',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          }
        ]
      }
    ]
  },
  {
    weekNumber: 8,
    block: 'Block 2.2',
    days: [
      {
        dayNumber: 1,
        exercises: [
          {
            name: 'Back Squat',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 3 }, { reps: 8, rir: 3 }, { reps: 8, rir: 2 }],
            rest: '3-4'
          },
          {
            name: 'BB Bench Press',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 2 }, { reps: 8, rir: 2 }, { reps: 8, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Chest Supported Row',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '1-2'
          },
          {
            name: 'DB Lateral Raise',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Kneeling Cable Crunch',
            sets: [{ reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }],
            rest: '1'
          },
          {
            name: 'DB Single-Leg Calf Raise',
            sets: [{ reps: 15, rir: 3 }, { reps: 15, rir: 2 }, { reps: 15, rir: 1 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 2,
        exercises: [
          {
            name: 'BB Overhead Press',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 2 }, { reps: 8, rir: 2 }, { reps: 8, rir: 2 }],
            rest: '2-3'
          },
          {
            name: 'Lat Pull-down (close grip)',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Leg Extension',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '1-2'
          },
          {
            name: 'Standing Cable Chest Flye',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Cable Pushdown',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 3,
        exercises: [
          {
            name: 'Sumo Deadlift',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 2 }, { reps: 8, rir: 2 }, { reps: 8, rir: 2 }],
            rest: '3-4'
          },
          {
            name: 'Incline DB Press',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 2 }, { reps: 8, rir: 2 }, { reps: 8, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Leg Curl',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          },
          {
            name: 'EZ Bar Curl',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Cable Lateral Raise',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 4,
        exercises: [
          {
            name: 'T-Bar Row',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Bulgarian Split Squat',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Incline Cable Chest Flye',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Cable Overhead Extension',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Reverse Crunch',
            sets: [{ reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }],
            rest: '1'
          },
          {
            name: 'Seated Calf Press',
            sets: [{ reps: 15, rir: 3 }, { reps: 15, rir: 2 }, { reps: 15, rir: 1 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 5,
        exercises: [
          {
            name: 'Lat Pull-down (wide grip)',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Alternating DB Shoulder Press',
            sets: [{ reps: 16, rir: 3 }, { reps: 16, rir: 2 }, { reps: 16, rir: 2 }, { reps: 16, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Romanian Deadlift',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          },
          {
            name: 'DB Bicep Curl',
            sets: [{ reps: 20, rir: 3 }, { reps: 20, rir: 2 }, { reps: 20, rir: 2 }, { reps: 20, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Reverse Pec Deck',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          }
        ]
      }
    ]
  },
  {
    weekNumber: 9,
    block: 'Block 3.1',
    days: [
      {
        dayNumber: 1,
        exercises: [
          {
            name: 'Back Squat',
            sets: [{ reps: 5, rir: 3 }, { reps: 5, rir: 2 }, { reps: 5, rir: 2 }, { reps: 5, rir: 2 }],
            rest: '3-4'
          },
          {
            name: 'Chest Supported Row',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 2 }, { reps: 8, rir: 2 }, { reps: 8, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'DB Lateral Raise',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '1'
          },
          {
            name: 'EZ Bar Curl',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 2 }, { reps: 8, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Decline Crunch (No Weight)',
            sets: [{ reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }, { reps: 15, rir: null }],
            rest: '1'
          },
          {
            name: 'Rear Delt Cable Flye',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 2,
        exercises: [
          {
            name: 'Sumo Deadlift',
            sets: [{ reps: 5, rir: 3 }, { reps: 5, rir: 2 }, { reps: 5, rir: 2 }, { reps: 5, rir: 2 }],
            rest: '3-4'
          },
          {
            name: 'BB Bench Press',
            sets: [{ reps: 6, rir: 3 }, { reps: 6, rir: 2 }, { reps: 6, rir: 2 }, { reps: 6, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Leg Extension',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 2 }, { reps: 8, rir: 2 }, { reps: 8, rir: 1 }],
            rest: '1-2'
          },
          {
            name: 'DB Skull Crusher',
            sets: [{ reps: 8, rir: 2 }, { reps: 8, rir: 2 }, { reps: 8, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Smith Machine Calf Raise',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 3,
        exercises: [
          {
            name: 'Lat Pulldown',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 2 }, { reps: 8, rir: 1 }, { reps: 8, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'BB Overhead Press',
            sets: [{ reps: 6, rir: 3 }, { reps: 6, rir: 2 }, { reps: 6, rir: 1 }, { reps: 6, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Leg Curl',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Incline Cable Chest Flye',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Reverse Crunch',
            sets: [{ reps: 10, rir: null }, { reps: 10, rir: null }, { reps: 10, rir: null }, { reps: 10, rir: null }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 4,
        exercises: [
          {
            name: 'BB Bench Press',
            sets: [{ reps: 6, rir: 3 }, { reps: 6, rir: 2 }, { reps: 6, rir: 1 }, { reps: 6, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Back Squat',
            sets: [{ reps: 5, rir: 3 }, { reps: 5, rir: 2 }, { reps: 5, rir: 2 }, { reps: 5, rir: 1 }],
            rest: '3-4'
          },
          {
            name: 'Chest Supported Row',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 2 }, { reps: 8, rir: 2 }, { reps: 8, rir: 1 }],
            rest: '1-2'
          },
          {
            name: 'Cable Lateral Raise',
            sets: [{ reps: 10, rir: 3 }, { reps: 10, rir: 2 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Seated Calf Press',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 5,
        exercises: [
          {
            name: 'BB Overhead Press',
            sets: [{ reps: 6, rir: 3 }, { reps: 6, rir: 2 }, { reps: 6, rir: 1 }, { reps: 6, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Sumo Deadlift',
            sets: [{ reps: 5, rir: 3 }, { reps: 5, rir: 2 }, { reps: 5, rir: 2 }, { reps: 5, rir: 2 }],
            rest: '3-4'
          },
          {
            name: 'Lat Pulldown',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 2 }, { reps: 8, rir: 1 }, { reps: 8, rir: 1 }],
            rest: '1-2'
          },
          {
            name: 'Cable Pushdown',
            sets: [{ reps: 8, rir: 3 }, { reps: 8, rir: 2 }, { reps: 8, rir: 1 }],
            rest: '1'
          },
          {
            name: 'DB Bicep Curl',
            sets: [{ reps: 16, rir: 3 }, { reps: 16, rir: 2 }, { reps: 16, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Standing Cable Chest Flye',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          }
        ]
      }
    ]
  },
  {
    weekNumber: 10,
    block: 'Block 3.2',
    days: [
      {
        dayNumber: 1,
        exercises: [
          {
            name: 'Back Squat',
            sets: [{ reps: 5, rir: 2 }, { reps: 5, rir: 2 }, { reps: 5, rir: 2 }, { reps: 5, rir: 1 }],
            rest: '3-4'
          },
          {
            name: 'Chest Supported Row',
            sets: [{ reps: 8, rir: 2 }, { reps: 8, rir: 2 }, { reps: 8, rir: 1 }, { reps: 8, rir: 0 }],
            rest: '2-3'
          },
          {
            name: 'DB Lateral Raise',
            sets: [{ reps: 10, rir: 2 }, { reps: 10, rir: 1 }, { reps: 10, rir: 0 }],
            rest: '1'
          },
          {
            name: 'EZ Bar Curl',
            sets: [{ reps: 8, rir: 2 }, { reps: 8, rir: 1 }, { reps: 8, rir: 0 }],
            rest: '1'
          },
          {
            name: 'Decline Crunch (Weighted)',
            sets: [{ reps: 15, rir: 2 }, { reps: 15, rir: 2 }, { reps: 15, rir: 2 }, { reps: 15, rir: 1 }],
            rest: '1'
          },
          {
            name: 'Rear Delt Cable Flye',
            sets: [{ reps: 10, rir: 2 }, { reps: 10, rir: 1 }, { reps: 10, rir: 0 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 2,
        exercises: [
          {
            name: 'Sumo Deadlift',
            sets: [{ reps: 5, rir: 2 }, { reps: 5, rir: 2 }, { reps: 5, rir: 1 }, { reps: 5, rir: 1 }],
            rest: '3-4'
          },
          {
            name: 'BB Bench Press',
            sets: [{ reps: 6, rir: 2 }, { reps: 6, rir: 2 }, { reps: 6, rir: 1 }, { reps: 6, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Leg Extension',
            sets: [{ reps: 8, rir: 2 }, { reps: 8, rir: 2 }, { reps: 8, rir: 1 }, { reps: 8, rir: 0 }],
            rest: '1-2'
          },
          {
            name: 'DB Skull Crusher',
            sets: [{ reps: 8, rir: 2 }, { reps: 8, rir: 1 }, { reps: 8, rir: 0 }],
            rest: '1'
          },
          {
            name: 'Smith Machine Calf Raise',
            sets: [{ reps: 12, rir: 3 }, { reps: 12, rir: 2 }, { reps: 12, rir: 2 }, { reps: 12, rir: 1 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 3,
        exercises: [
          {
            name: 'Lat Pulldown',
            sets: [{ reps: 8, rir: 2 }, { reps: 8, rir: 2 }, { reps: 8, rir: 1 }, { reps: 8, rir: 0 }],
            rest: '2-3'
          },
          {
            name: 'BB Overhead Press',
            sets: [{ reps: 6, rir: 2 }, { reps: 6, rir: 2 }, { reps: 6, rir: 1 }, { reps: 6, rir: 0 }],
            rest: '2-3'
          },
          {
            name: 'Leg Curl',
            sets: [{ reps: 10, rir: 2 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }, { reps: 10, rir: 0 }],
            rest: '1'
          },
          {
            name: 'Incline Cable Flye',
            sets: [{ reps: 12, rir: 2 }, { reps: 12, rir: 1 }, { reps: 12, rir: 0 }],
            rest: '1'
          },
          {
            name: 'Reverse Crunch',
            sets: [{ reps: 10, rir: null }, { reps: 10, rir: null }, { reps: 10, rir: null }, { reps: 10, rir: null }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 4,
        exercises: [
          {
            name: 'BB Bench Press',
            sets: [{ reps: 6, rir: 2 }, { reps: 6, rir: 2 }, { reps: 6, rir: 1 }, { reps: 6, rir: 1 }],
            rest: '2-3'
          },
          {
            name: 'Back Squat',
            sets: [{ reps: 5, rir: 2 }, { reps: 5, rir: 2 }, { reps: 5, rir: 1 }, { reps: 5, rir: 1 }],
            rest: '3-4'
          },
          {
            name: 'Chest Supported Row',
            sets: [{ reps: 8, rir: 2 }, { reps: 8, rir: 2 }, { reps: 8, rir: 1 }, { reps: 8, rir: 0 }],
            rest: '1-2'
          },
          {
            name: 'Cable Lateral Raise',
            sets: [{ reps: 10, rir: 2 }, { reps: 10, rir: 2 }, { reps: 10, rir: 1 }, { reps: 10, rir: 0 }],
            rest: '1'
          },
          {
            name: 'Seated Calf Press',
            sets: [{ reps: 12, rir: 2 }, { reps: 12, rir: 1 }, { reps: 12, rir: 0 }],
            rest: '1'
          }
        ]
      },
      {
        dayNumber: 5,
        exercises: [
          {
            name: 'BB Overhead Press',
            sets: [{ reps: 6, rir: 2 }, { reps: 6, rir: 2 }, { reps: 6, rir: 1 }, { reps: 6, rir: 0 }],
            rest: '2-3'
          },
          {
            name: 'Sumo Deadlift',
            sets: [{ reps: 5, rir: 2 }, { reps: 5, rir: 2 }, { reps: 5, rir: 1 }, { reps: 5, rir: 1 }],
            rest: '3-4'
          },
          {
            name: 'Lat Pulldown',
            sets: [{ reps: 8, rir: 2 }, { reps: 8, rir: 1 }, { reps: 8, rir: 0 }],
            rest: '1-2'
          },
          {
            name: 'Cable Pushdown',
            sets: [{ reps: 8, rir: 2 }, { reps: 8, rir: 1 }, { reps: 8, rir: 0 }],
            rest: '1'
          },
          {
            name: 'DB Bicep Curl',
            sets: [{ reps: 16, rir: 2 }, { reps: 16, rir: 1 }, { reps: 16, rir: 0 }],
            rest: '1'
          },
          {
            name: 'Standing Cable Chest Flye',
            sets: [{ reps: 12, rir: 2 }, { reps: 12, rir: 1 }, { reps: 12, rir: 0 }],
            rest: '1'
          }
        ]
      }
    ]
  }
];

// Legacy type for compatibility
export interface WorkoutExercise {
  name: string;
  sets: { reps: number; rir: number | null }[];
  rest: string;
}

// Helper functions
export function getAvailableWeeks(): number[] {
  return workoutData.map(week => week.weekNumber);
}

export function getDaysForWeek(weekNumber: number): number[] {
  const week = workoutData.find(w => w.weekNumber === weekNumber);
  if (!week) return [];
  return week.days.map(d => d.dayNumber);
}

export function getBlockForWeek(weekNumber: number): string | undefined {
  const week = workoutData.find(w => w.weekNumber === weekNumber);
  return week?.block;
}

export function getWorkout(weekNumber: number, dayNumber: number) {
  const week = workoutData.find(w => w.weekNumber === weekNumber);
  if (!week) return undefined;
  
  const day = week.days.find(d => d.dayNumber === dayNumber);
  if (!day) return undefined;
  
  return {
    exercises: day.exercises.map(ex => ({
      name: ex.name,
      sets: ex.sets,
      rest: ex.rest
    }))
  };
}
