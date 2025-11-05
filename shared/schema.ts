import { z } from "zod";
import { pgTable, serial, integer, text, numeric, unique } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

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

export const exerciseWeights = pgTable("exercise_weights", {
  id: serial("id").primaryKey(),
  week: integer("week").notNull(),
  day: integer("day").notNull(),
  exerciseName: text("exercise_name").notNull(),
  weight: numeric("weight", { precision: 5, scale: 2 }).notNull(),
}, (table) => ({
  uniqueExercisePerDay: unique("unique_exercise_per_day").on(table.week, table.day, table.exerciseName),
}));

export const insertExerciseWeightSchema = createInsertSchema(exerciseWeights).omit({ id: true });
export type InsertExerciseWeight = z.infer<typeof insertExerciseWeightSchema>;
export type ExerciseWeight = typeof exerciseWeights.$inferSelect;
