import { CompletionStatus, type Completion } from "@shared/schema";
import { queryClient } from "./queryClient";
import { supabase, type ExerciseWeight as SupabaseExerciseWeight } from "./supabase";

let completionsCache: Completion[] | null = null;

// Fetch all completions from Supabase
export async function fetchCompletions(): Promise<Completion[]> {
  const { data, error } = await supabase
    .from('completions')
    .select('*')
    .order('week', { ascending: true })
    .order('day', { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch completions: ${error.message}`);
  }

  completionsCache = data || [];
  return completionsCache;
}

function completionsToStatus(completions: Completion[]): CompletionStatus {
  const status: CompletionStatus = {};
  for (const completion of completions) {
    const weekKey = `week${completion.week}`;
    const dayKey = `day${completion.day}`;
    if (!status[weekKey]) {
      status[weekKey] = {};
    }
    status[weekKey][dayKey] = true;
  }
  return status;
}

export function getCompletionStatus(): CompletionStatus {
  if (!completionsCache) {
    return {};
  }
  return completionsToStatus(completionsCache);
}

export function isDayCompleted(week: number, day: number): boolean {
  const status = getCompletionStatus();
  return status[`week${week}`]?.[`day${day}`] ?? false;
}

// Toggle day completion status
export async function toggleDayCompletion(week: number, day: number): Promise<void> {
  // Check if completion already exists
  const { data: existing } = await supabase
    .from('completions')
    .select('*')
    .eq('week', week)
    .eq('day', day)
    .maybeSingle();

  if (existing) {
    // Delete if exists
    const { error } = await supabase
      .from('completions')
      .delete()
      .eq('week', week)
      .eq('day', day);

    if (error) {
      throw new Error(`Failed to remove completion: ${error.message}`);
    }
  } else {
    // Insert if doesn't exist
    const { error } = await supabase
      .from('completions')
      .insert({ week, day });

    if (error) {
      throw new Error(`Failed to add completion: ${error.message}`);
    }
  }

  // Invalidate React Query cache
  queryClient.invalidateQueries({ queryKey: ['completions'] });
}

export function getCompletedDaysForWeek(week: number): number {
  const status = getCompletionStatus();
  const weekData = status[`week${week}`];
  if (!weekData) return 0;
  return Object.values(weekData).filter(Boolean).length;
}

// Exercise weights functions
export interface ExerciseWeightData {
  week: number;
  day: number;
  exerciseName: string;
  weight: number;
}

export async function saveExerciseWeight(data: ExerciseWeightData): Promise<void> {
  const { week, day, exerciseName, weight } = data;

  // Check if weight already exists for this exercise on this day
  const { data: existing } = await supabase
    .from('exercise_weights')
    .select('id')
    .eq('week', week)
    .eq('day', day)
    .eq('exercise_name', exerciseName)
    .maybeSingle();

  if (existing) {
    // Update existing record
    const { error } = await supabase
      .from('exercise_weights')
      .update({ weight: weight.toString() })
      .eq('id', existing.id);

    if (error) {
      throw new Error(`Failed to update weight: ${error.message}`);
    }
  } else {
    // Insert new record
    const { error } = await supabase
      .from('exercise_weights')
      .insert({
        week,
        day,
        exercise_name: exerciseName,
        weight: weight.toString(),
      });

    if (error) {
      throw new Error(`Failed to save weight: ${error.message}`);
    }
  }

  // Invalidate React Query cache
  queryClient.invalidateQueries({ queryKey: ['weights'] });
}

export async function getExerciseWeight(
  week: number,
  day: number,
  exerciseName: string
): Promise<number | null> {
  const { data, error } = await supabase
    .from('exercise_weights')
    .select('weight')
    .eq('week', week)
    .eq('day', day)
    .eq('exercise_name', exerciseName)
    .maybeSingle();

  if (error) {
    console.error('Failed to fetch weight:', error);
    return null;
  }

  return data ? parseFloat(data.weight) : null;
}

export async function getExerciseWeightHistory(exerciseName: string): Promise<SupabaseExerciseWeight[]> {
  const { data, error } = await supabase
    .from('exercise_weights')
    .select('*')
    .eq('exercise_name', exerciseName)
    .order('week', { ascending: true })
    .order('day', { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch weight history: ${error.message}`);
  }

  return data || [];
}

export interface ExerciseStats {
  exerciseName: string;
  recordCount: number;
  bestWeight: number | null;
}

export async function getExerciseStats(): Promise<ExerciseStats[]> {
  const { data, error } = await supabase
    .from('exercise_weights')
    .select('exercise_name, weight');

  if (error) {
    throw new Error(`Failed to fetch exercise stats: ${error.message}`);
  }

  if (!data) return [];

  // Group by exercise name and calculate stats
  const statsMap = new Map<string, { count: number; maxWeight: number }>();

  for (const row of data) {
    const weight = parseFloat(row.weight);
    const existing = statsMap.get(row.exercise_name);

    if (existing) {
      existing.count++;
      existing.maxWeight = Math.max(existing.maxWeight, weight);
    } else {
      statsMap.set(row.exercise_name, { count: 1, maxWeight: weight });
    }
  }

  // Convert to array and sort by exercise name
  return Array.from(statsMap.entries())
    .map(([exerciseName, stats]) => ({
      exerciseName,
      recordCount: stats.count,
      bestWeight: stats.maxWeight,
    }))
    .sort((a, b) => a.exerciseName.localeCompare(b.exerciseName));
}

export async function deleteAllWeights(): Promise<void> {
  const { error } = await supabase
    .from('exercise_weights')
    .delete()
    .neq('id', 0); // Delete all records

  if (error) {
    throw new Error(`Failed to delete all weights: ${error.message}`);
  }

  queryClient.invalidateQueries({ queryKey: ['weights'] });
}

export async function deleteWeight(id: number): Promise<void> {
  const { error } = await supabase
    .from('exercise_weights')
    .delete()
    .eq('id', id);

  if (error) {
    throw new Error(`Failed to delete weight: ${error.message}`);
  }

  queryClient.invalidateQueries({ queryKey: ['weights'] });
}

export async function deleteAllCompletions(): Promise<void> {
  const { error } = await supabase
    .from('completions')
    .delete()
    .neq('id', 0); // Delete all records

  if (error) {
    throw new Error(`Failed to delete all completions: ${error.message}`);
  }

  queryClient.invalidateQueries({ queryKey: ['completions'] });
}
