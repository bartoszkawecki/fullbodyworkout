import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertExerciseWeightSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/weights", async (req, res) => {
    try {
      const data = insertExerciseWeightSchema.parse(req.body);
      const saved = await storage.saveExerciseWeight(data);
      res.json(saved);
    } catch (error) {
      console.error("Error saving weight:", error);
      res.status(400).json({ error: "Failed to save weight" });
    }
  });

  app.get("/api/weights/:week/:day/:exerciseName", async (req, res) => {
    try {
      const week = parseInt(req.params.week);
      const day = parseInt(req.params.day);
      const exerciseName = decodeURIComponent(req.params.exerciseName);
      
      const weight = await storage.getExerciseWeight(week, day, exerciseName);
      res.json(weight || null);
    } catch (error) {
      console.error("Error getting weight:", error);
      res.status(500).json({ error: "Failed to get weight" });
    }
  });

  app.get("/api/weights/history/:exerciseName", async (req, res) => {
    try {
      const exerciseName = decodeURIComponent(req.params.exerciseName);
      const history = await storage.getExerciseWeightHistory(exerciseName);
      res.json(history);
    } catch (error) {
      console.error("Error getting weight history:", error);
      res.status(500).json({ error: "Failed to get weight history" });
    }
  });

  app.get("/api/exercise-stats", async (req, res) => {
    try {
      const stats = await storage.getExerciseStats();
      res.json(stats);
    } catch (error) {
      console.error("Error getting exercise stats:", error);
      res.status(500).json({ error: "Failed to get exercise stats" });
    }
  });

  app.delete("/api/weights", async (req, res) => {
    try {
      await storage.deleteAllWeights();
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting all weights:", error);
      res.status(500).json({ error: "Failed to delete all weights" });
    }
  });

  app.delete("/api/weights/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (Number.isNaN(id) || id <= 0) {
        return res.status(400).json({ error: "Invalid weight ID" });
      }
      await storage.deleteWeight(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting weight:", error);
      res.status(500).json({ error: "Failed to delete weight" });
    }
  });

  app.get("/api/completions", async (req, res) => {
    try {
      const completions = await storage.getCompletions();
      res.json(completions);
    } catch (error) {
      console.error("Error getting completions:", error);
      res.status(500).json({ error: "Failed to get completions" });
    }
  });

  app.post("/api/completions/toggle", async (req, res) => {
    try {
      const { week, day } = req.body;
      if (typeof week !== "number" || typeof day !== "number") {
        return res.status(400).json({ error: "Invalid week or day" });
      }
      const isCompleted = await storage.toggleDayCompletion(week, day);
      res.json({ isCompleted });
    } catch (error) {
      console.error("Error toggling completion:", error);
      res.status(500).json({ error: "Failed to toggle completion" });
    }
  });

  app.delete("/api/completions", async (req, res) => {
    try {
      await storage.deleteAllCompletions();
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting all completions:", error);
      res.status(500).json({ error: "Failed to delete all completions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
