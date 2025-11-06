import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { db } from "./db";
import { exerciseWeights } from "@shared/schema";
import { eq, and } from "drizzle-orm";
import { registerAuthRoutes } from "./authRoutes";

// Middleware to require authentication
function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Authentication required" });
  }
  next();
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Register authentication routes
  registerAuthRoutes(app);

  app.post("/api/weights", requireAuth, async (req, res) => {
    try {
      const { week, day, exerciseName, weight } = req.body;
      const userId = req.user!.id;
      const [result] = await db
        .insert(exerciseWeights)
        .values({
          userId,
          week,
          day,
          exerciseName,
          weight,
        })
        .onConflictDoUpdate({
          target: [exerciseWeights.userId, exerciseWeights.week, exerciseWeights.day, exerciseWeights.exerciseName],
          set: { weight },
        })
        .returning();
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/weights/:week/:day/:exerciseName", requireAuth, async (req, res) => {
    try {
      const { week, day, exerciseName } = req.params;
      const userId = req.user!.id;
      const [weight] = await db
        .select()
        .from(exerciseWeights)
        .where(
          and(
            eq(exerciseWeights.userId, userId),
            eq(exerciseWeights.week, parseInt(week)),
            eq(exerciseWeights.day, parseInt(day)),
            eq(exerciseWeights.exerciseName, exerciseName)
          )
        );
      res.json(weight || null);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/weights/history/:exerciseName", requireAuth, async (req, res) => {
    try {
      const { exerciseName } = req.params;
      const userId = req.user!.id;
      const history = await db
        .select()
        .from(exerciseWeights)
        .where(
          and(
            eq(exerciseWeights.userId, userId),
            eq(exerciseWeights.exerciseName, exerciseName)
          )
        );
      res.json(history);
    } catch (error: any) {
      console.error("Error getting weight history:", error);
      res.status(500).json({ error: "Failed to get weight history" });
    }
  });

  app.get("/api/exercise-stats", requireAuth, async (req, res) => {
    try {
      const userId = req.user!.id;
      const stats = await db
        .select()
        .from(exerciseWeights)
        .where(eq(exerciseWeights.userId, userId));
      res.json(stats);
    } catch (error: any) {
      console.error("Error getting exercise stats:", error);
      res.status(500).json({ error: "Failed to get exercise stats" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}