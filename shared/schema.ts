import { z } from "zod";
import { pgTable, serial, integer, text, numeric, unique, timestamp, boolean } from "drizzle-orm/pg-core";
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

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  googleId: text("google_id").notNull().unique(),
  email: text("email").notNull().unique(),
  name: text("name"),
  picture: text("picture"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const invites = pgTable("invites", {
  id: serial("id").primaryKey(),
  code: text("code").notNull().unique(),
  usedBy: integer("used_by").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  usedAt: timestamp("used_at"),
  isActive: boolean("is_active").default(true).notNull(),
});

export const exerciseWeights = pgTable("exercise_weights", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  week: integer("week").notNull(),
  day: integer("day").notNull(),
  exerciseName: text("exercise_name").notNull(),
  weight: numeric("weight", { precision: 5, scale: 2 }).notNull(),
}, (table) => ({
  uniqueExercisePerDay: unique("unique_exercise_per_day").on(table.userId, table.week, table.day, table.exerciseName),
}));

export const insertUserSchema = createInsertSchema(users).omit({ id: true, createdAt: true });
export const insertInviteSchema = createInsertSchema(invites).omit({ id: true, createdAt: true, usedAt: true });
export const insertExerciseWeightSchema = createInsertSchema(exerciseWeights).omit({ id: true });

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Invite = typeof invites.$inferSelect;
export type InsertInvite = z.infer<typeof insertInviteSchema>;
export type InsertExerciseWeight = z.infer<typeof insertExerciseWeightSchema>;
export type ExerciseWeight = typeof exerciseWeights.$inferSelect;
