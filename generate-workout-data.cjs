const fs = require('fs');

const jsonFile = process.argv[2] || 'attached_assets/full_10_week_program_fixed_1762352638695.json';

const jsonData = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

const workouts = [];

for (let weekNum = 1; weekNum <= 10; weekNum++) {
  const weekKey = `week${weekNum}`;
  const weekData = jsonData[weekKey];
  
  if (!weekData) {
    console.log(`Warning: No data for ${weekKey}`);
    continue;
  }

  for (let dayNum = 1; dayNum <= 5; dayNum++) {
    const dayKey = `day${dayNum}`;
    const dayData = weekData[dayKey];
    
    if (!dayData) {
      console.log(`Warning: No data for ${weekKey} ${dayKey}`);
      continue;
    }

    const exercises = dayData.map(ex => {
      const sets = ex.sets.map(set => ({
        reps: set.reps,
        rir: set.rir
      }));

      return {
        name: ex.exercise,
        sets: sets,
        rest: ex.rest
      };
    });

    workouts.push({
      week: weekNum,
      day: dayNum,
      exercises: exercises
    });
  }
}

const tsContent = `// Auto-generated workout data from JSON
export interface WorkoutExercise {
  name: string;
  sets: {
    reps: number;
    rir: number | null;
  }[];
  rest: string;
}

export interface Workout {
  week: number;
  day: number;
  exercises: WorkoutExercise[];
}

export const workoutData: Workout[] = ${JSON.stringify(workouts, null, 2)};

export function getWorkout(week: number, day: number): Workout | undefined {
  return workoutData.find(w => w.week === week && w.day === day);
}

export function getAvailableWeeks(): number[] {
  const weeks = new Set(workoutData.map(w => w.week));
  return Array.from(weeks).sort((a, b) => a - b);
}

export function getDaysForWeek(week: number): number[] {
  const days = workoutData
    .filter(w => w.week === week)
    .map(w => w.day);
  return Array.from(new Set(days)).sort((a, b) => a - b);
}
`;

fs.writeFileSync('shared/workoutData.ts', tsContent);
const totalWeeks = new Set(workouts.map(w => w.week)).size;
console.log(`Generated ${workouts.length} workouts from ${totalWeeks} weeks`);
console.log('Weeks:', [...new Set(workouts.map(w => w.week))].sort((a,b) => a-b));
