import { z } from "zod";

export const setSchema = z.object({
  reps: z.string(),
  rir: z.string(),
  rest: z.string(),
});

export const exerciseSchema = z.object({
  name: z.string(),
  sets: z.array(setSchema),
});

export const workoutSchema = z.object({
  week: z.number(),
  day: z.number(),
  exercises: z.array(exerciseSchema),
});

export type Set = z.infer<typeof setSchema>;
export type Exercise = z.infer<typeof exerciseSchema>;
export type Workout = z.infer<typeof workoutSchema>;

export interface CompletionStatus {
  [weekKey: string]: {
    [dayKey: string]: boolean;
  };
}
