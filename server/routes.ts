import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertExerciseWeightSchema } from "@shared/schema";
import { requireAuth, type AuthRequest } from "./auth";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

const BETA_PASSWORD = 'Burgerek2137';

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint - no auth required
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      version: "auth-enabled",
      env: {
        hasSupabaseUrl: !!process.env.SUPABASE_URL,
        hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
        hasDatabaseUrl: !!process.env.DATABASE_URL
      }
    });
  });

  // Registration endpoint
  app.post("/api/auth/register", async (req, res) => {
    try {
      const { username, password, betaPassword } = req.body;

      // Validate required fields
      if (!username || !password || !betaPassword) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Validate beta password
      if (betaPassword !== BETA_PASSWORD) {
        return res.status(400).json({ error: "Invalid beta password" });
      }

      // Validate password strength
      if (password.length < 6) {
        return res.status(400).json({ error: "Password must be at least 6 characters" });
      }

      // Create email from username
      const email = `${username.toLowerCase().replace(/\s+/g, '')}@workout.app`;

      // Create user with Supabase Admin API (bypasses email confirmation)
      const { data, error } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true, // Auto-confirm email
        user_metadata: {
          username
        }
      });

      if (error) {
        console.error("Registration error:", error);
        return res.status(400).json({ error: error.message });
      }

      res.json({ success: true, user: data.user });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ error: "Failed to register user" });
    }
  });
  app.post("/api/weights", requireAuth, async (req: AuthRequest, res) => {
    try {
      const userId = req.userId!;
      const data = insertExerciseWeightSchema.parse(req.body);
      const saved = await storage.saveExerciseWeight(userId, data);
      res.json(saved);
    } catch (error) {
      console.error("Error saving weight:", error);
      res.status(400).json({ error: "Failed to save weight" });
    }
  });

  app.get("/api/weights/:week/:day/:exerciseName", requireAuth, async (req: AuthRequest, res) => {
    try {
      const userId = req.userId!;
      const week = parseInt(req.params.week);
      const day = parseInt(req.params.day);
      const exerciseName = decodeURIComponent(req.params.exerciseName);

      const weight = await storage.getExerciseWeight(userId, week, day, exerciseName);
      res.json(weight || null);
    } catch (error) {
      console.error("Error getting weight:", error);
      res.status(500).json({ error: "Failed to get weight" });
    }
  });

  app.get("/api/weights/history/:exerciseName", requireAuth, async (req: AuthRequest, res) => {
    try {
      const userId = req.userId!;
      const exerciseName = decodeURIComponent(req.params.exerciseName);
      const history = await storage.getExerciseWeightHistory(userId, exerciseName);
      res.json(history);
    } catch (error) {
      console.error("Error getting weight history:", error);
      res.status(500).json({ error: "Failed to get weight history" });
    }
  });

  app.get("/api/exercise-stats", requireAuth, async (req: AuthRequest, res) => {
    try {
      const userId = req.userId!;
      const stats = await storage.getExerciseStats(userId);
      res.json(stats);
    } catch (error) {
      console.error("Error getting exercise stats:", error);
      res.status(500).json({ error: "Failed to get exercise stats" });
    }
  });

  app.delete("/api/weights", requireAuth, async (req: AuthRequest, res) => {
    try {
      const userId = req.userId!;
      await storage.deleteAllWeights(userId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting all weights:", error);
      res.status(500).json({ error: "Failed to delete all weights" });
    }
  });

  app.delete("/api/weights/:id", requireAuth, async (req: AuthRequest, res) => {
    try {
      const userId = req.userId!;
      const id = parseInt(req.params.id, 10);
      if (Number.isNaN(id) || id <= 0) {
        return res.status(400).json({ error: "Invalid weight ID" });
      }
      await storage.deleteWeight(userId, id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting weight:", error);
      res.status(500).json({ error: "Failed to delete weight" });
    }
  });

  app.get("/api/completions", requireAuth, async (req: AuthRequest, res) => {
    try {
      const userId = req.userId!;
      const completions = await storage.getCompletions(userId);
      res.json(completions);
    } catch (error) {
      console.error("Error getting completions:", error);
      res.status(500).json({ error: "Failed to get completions" });
    }
  });

  app.post("/api/completions/toggle", requireAuth, async (req: AuthRequest, res) => {
    try {
      const userId = req.userId!;
      const { week, day } = req.body;
      if (typeof week !== "number" || typeof day !== "number") {
        return res.status(400).json({ error: "Invalid week or day" });
      }
      const isCompleted = await storage.toggleDayCompletion(userId, week, day);
      res.json({ isCompleted });
    } catch (error) {
      console.error("Error toggling completion:", error);
      res.status(500).json({ error: "Failed to toggle completion" });
    }
  });

  app.delete("/api/completions", requireAuth, async (req: AuthRequest, res) => {
    try {
      const userId = req.userId!;
      await storage.deleteAllCompletions(userId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting all completions:", error);
      res.status(500).json({ error: "Failed to delete all completions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
