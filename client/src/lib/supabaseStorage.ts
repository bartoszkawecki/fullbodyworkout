import { supabase } from './supabase';
import type { ExerciseWeight, InsertExerciseWeight, Completion } from '@shared/schema';

export interface ExerciseStats {
  exerciseName: string;
  recordCount: number;
  bestWeight: number | null;
}

// Exercise Weights
export async function saveExerciseWeight(data: InsertExerciseWeight): Promise<ExerciseWeight> {
  // Check if weight already exists
  const { data: existing } = await supabase
    .from('exercise_weights')
    .select('*')
    .eq('week', data.week)
    .eq('day', data.day)
    .eq('exercise_name', data.exerciseName)
    .single();

  if (existing) {
    // Update existing record
    const { data: updated, error } = await supabase
      .from('exercise_weights')
      .update({ weight: data.weight })
      .eq('id', existing.id)
      .select()
      .single();

    if (error) throw error;
    return {
      id: updated.id,
      week: updated.week,
      day: updated.day,
      exerciseName: updated.exercise_name,
      weight: updated.weight,
    };
  } else {
    // Insert new record
    const { data: created, error } = await supabase
      .from('exercise_weights')
      .insert({
        week: data.week,
        day: data.day,
        exercise_name: data.exerciseName,
        weight: data.weight,
      })
      .select()
      .single();

    if (error) throw error;
    return {
      id: created.id,
      week: created.week,
      day: created.day,
      exerciseName: created.exercise_name,
      weight: created.weight,
    };
  }
}

export async function getExerciseWeight(
  week: number,
  day: number,
  exerciseName: string
): Promise<ExerciseWeight | null> {
  const { data, error } = await supabase
    .from('exercise_weights')
    .select('*')
    .eq('week', week)
    .eq('day', day)
    .eq('exercise_name', exerciseName)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null; // Not found
    throw error;
  }

  return data ? {
    id: data.id,
    week: data.week,
    day: data.day,
    exerciseName: data.exercise_name,
    weight: data.weight,
  } : null;
}

export async function getExerciseWeightHistory(exerciseName: string): Promise<ExerciseWeight[]> {
  const { data, error } = await supabase
    .from('exercise_weights')
    .select('*')
    .eq('exercise_name', exerciseName)
    .order('week', { ascending: true })
    .order('day', { ascending: true });

  if (error) throw error;

  return (data || []).map(item => ({
    id: item.id,
    week: item.week,
    day: item.day,
    exerciseName: item.exercise_name,
    weight: item.weight,
  }));
}

export async function getExerciseStats(): Promise<ExerciseStats[]> {
  const { data, error } = await supabase
    .from('exercise_weights')
    .select('exercise_name, weight');

  if (error) throw error;

  // Group by exercise and calculate stats
  const statsMap = new Map<string, { count: number; maxWeight: number }>();

  (data || []).forEach(item => {
    const existing = statsMap.get(item.exercise_name);
    if (existing) {
      existing.count++;
      existing.maxWeight = Math.max(existing.maxWeight, parseFloat(item.weight));
    } else {
      statsMap.set(item.exercise_name, {
        count: 1,
        maxWeight: parseFloat(item.weight),
      });
    }
  });

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
    .neq('id', 0); // Delete all rows

  if (error) throw error;
}

export async function deleteWeight(id: number): Promise<void> {
  const { error } = await supabase
    .from('exercise_weights')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// Completions
export async function getCompletions(): Promise<Completion[]> {
  const { data, error } = await supabase
    .from('completions')
    .select('*')
    .order('week', { ascending: true })
    .order('day', { ascending: true });

  if (error) throw error;

  return (data || []).map(item => ({
    id: item.id,
    week: item.week,
    day: item.day,
  }));
}

export async function toggleDayCompletion(week: number, day: number): Promise<boolean> {
  // Check if completion exists
  const { data: existing } = await supabase
    .from('completions')
    .select('*')
    .eq('week', week)
    .eq('day', day)
    .single();

  if (existing) {
    // Delete completion
    const { error } = await supabase
      .from('completions')
      .delete()
      .eq('id', existing.id);

    if (error) throw error;
    return false; // Uncompleted
  } else {
    // Insert completion
    const { error } = await supabase
      .from('completions')
      .insert({ week, day });

    if (error) throw error;
    return true; // Completed
  }
}

export async function deleteAllCompletions(): Promise<void> {
  const { error } = await supabase
    .from('completions')
    .delete()
    .neq('id', 0); // Delete all rows

  if (error) throw error;
}
