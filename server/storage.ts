import { type ExerciseWeight, type InsertExerciseWeight, exerciseWeights } from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

export interface IStorage {
  saveExerciseWeight(data: InsertExerciseWeight): Promise<ExerciseWeight>;
  getExerciseWeight(week: number, day: number, exerciseName: string): Promise<ExerciseWeight | undefined>;
  getExerciseWeightHistory(exerciseName: string): Promise<ExerciseWeight[]>;
}

export class DbStorage implements IStorage {
  async saveExerciseWeight(data: InsertExerciseWeight): Promise<ExerciseWeight> {
    const existing = await this.getExerciseWeight(data.week, data.day, data.exerciseName);
    
    if (existing) {
      const [updated] = await db
        .update(exerciseWeights)
        .set({ weight: data.weight })
        .where(
          and(
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
        .values(data)
        .returning();
      return created;
    }
  }

  async getExerciseWeight(week: number, day: number, exerciseName: string): Promise<ExerciseWeight | undefined> {
    const [weight] = await db
      .select()
      .from(exerciseWeights)
      .where(
        and(
          eq(exerciseWeights.week, week),
          eq(exerciseWeights.day, day),
          eq(exerciseWeights.exerciseName, exerciseName)
        )
      );
    return weight;
  }

  async getExerciseWeightHistory(exerciseName: string): Promise<ExerciseWeight[]> {
    return db
      .select()
      .from(exerciseWeights)
      .where(eq(exerciseWeights.exerciseName, exerciseName))
      .orderBy(exerciseWeights.week, exerciseWeights.day);
  }
}

export const storage = new DbStorage();
