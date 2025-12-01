import { type ExerciseWeight, type InsertExerciseWeight, exerciseWeights, type Completion, type InsertCompletion, completions } from "@shared/schema";
import { db } from "./db";
import { eq, and, sql } from "drizzle-orm";

export interface ExerciseStats {
  exerciseName: string;
  recordCount: number;
  bestWeight: number | null;
}

export interface IStorage {
  saveExerciseWeight(userId: string, data: InsertExerciseWeight): Promise<ExerciseWeight>;
  getExerciseWeight(userId: string, week: number, day: number, exerciseName: string): Promise<ExerciseWeight | undefined>;
  getExerciseWeightHistory(userId: string, exerciseName: string): Promise<ExerciseWeight[]>;
  getExerciseStats(userId: string): Promise<ExerciseStats[]>;
  deleteAllWeights(userId: string): Promise<void>;
  deleteWeight(userId: string, id: number): Promise<void>;
  getCompletions(userId: string): Promise<Completion[]>;
  toggleDayCompletion(userId: string, week: number, day: number): Promise<boolean>;
  deleteAllCompletions(userId: string): Promise<void>;
}

export class DbStorage implements IStorage {
  async saveExerciseWeight(userId: string, data: InsertExerciseWeight): Promise<ExerciseWeight> {
    const existing = await this.getExerciseWeight(userId, data.week, data.day, data.exerciseName);

    if (existing) {
      const [updated] = await db
        .update(exerciseWeights)
        .set({ weight: data.weight })
        .where(
          and(
            eq(exerciseWeights.userId, userId),
            eq(exerciseWeights.week, data.week),
            eq(exerciseWeights.day, data.day),
            eq(exerciseWeights.exerciseName, data.exerciseName)
          )
        )
        .returning();
      return updated;
    } else {
      const [created] = await db
        .insert(exerciseWeights)
        .values({ ...data, userId })
        .returning();
      return created;
    }
  }

  async getExerciseWeight(userId: string, week: number, day: number, exerciseName: string): Promise<ExerciseWeight | undefined> {
    const [weight] = await db
      .select()
      .from(exerciseWeights)
      .where(
        and(
          eq(exerciseWeights.userId, userId),
          eq(exerciseWeights.week, week),
          eq(exerciseWeights.day, day),
          eq(exerciseWeights.exerciseName, exerciseName)
        )
      );
    return weight;
  }

  async getExerciseWeightHistory(userId: string, exerciseName: string): Promise<ExerciseWeight[]> {
    return db
      .select()
      .from(exerciseWeights)
      .where(
        and(
          eq(exerciseWeights.userId, userId),
          eq(exerciseWeights.exerciseName, exerciseName)
        )
      )
      .orderBy(exerciseWeights.week, exerciseWeights.day);
  }

  async getExerciseStats(userId: string): Promise<ExerciseStats[]> {
    const results = await db
      .select({
        exerciseName: exerciseWeights.exerciseName,
        recordCount: sql<number>`count(*)::int`,
        bestWeight: sql<string>`max(${exerciseWeights.weight})`,
      })
      .from(exerciseWeights)
      .where(eq(exerciseWeights.userId, userId))
      .groupBy(exerciseWeights.exerciseName)
      .orderBy(exerciseWeights.exerciseName);

    return results.map(r => ({
      exerciseName: r.exerciseName,
      recordCount: r.recordCount,
      bestWeight: r.bestWeight ? parseFloat(r.bestWeight) : null,
    }));
  }

  async deleteAllWeights(userId: string): Promise<void> {
    await db.delete(exerciseWeights).where(eq(exerciseWeights.userId, userId));
  }

  async deleteWeight(userId: string, id: number): Promise<void> {
    await db.delete(exerciseWeights).where(
      and(
        eq(exerciseWeights.userId, userId),
        eq(exerciseWeights.id, id)
      )
    );
  }

  async getCompletions(userId: string): Promise<Completion[]> {
    return db.select().from(completions).where(eq(completions.userId, userId));
  }

  async toggleDayCompletion(userId: string, week: number, day: number): Promise<boolean> {
    const [existing] = await db
      .select()
      .from(completions)
      .where(
        and(
          eq(completions.userId, userId),
          eq(completions.week, week),
          eq(completions.day, day)
        )
      );

    if (existing) {
      await db
        .delete(completions)
        .where(
          and(
            eq(completions.userId, userId),
            eq(completions.week, week),
            eq(completions.day, day)
          )
        );
      return false;
    } else {
      await db.insert(completions).values({ userId, week, day });
      return true;
    }
  }

  async deleteAllCompletions(userId: string): Promise<void> {
    await db.delete(completions).where(eq(completions.userId, userId));
  }
}

export const storage = new DbStorage();
