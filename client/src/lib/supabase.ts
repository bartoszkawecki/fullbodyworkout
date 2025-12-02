import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for database tables
export interface ExerciseWeight {
  id: number;
  week: number;
  day: number;
  exercise_name: string;
  weight: string; // numeric type from Postgres comes as string
}

export interface Completion {
  id: number;
  week: number;
  day: number;
}

// Database type definition for Supabase
export interface Database {
  public: {
    Tables: {
      exercise_weights: {
        Row: ExerciseWeight;
        Insert: Omit<ExerciseWeight, 'id'>;
        Update: Partial<Omit<ExerciseWeight, 'id'>>;
      };
      completions: {
        Row: Completion;
        Insert: Omit<Completion, 'id'>;
        Update: Partial<Omit<Completion, 'id'>>;
      };
    };
  };
}
