
import { Express, Request, Response } from "express";
import passport from "passport";
import { db } from "./db";
import { invites } from "@shared/schema";
import { createUserWithInvite } from "./auth";
import crypto from "crypto";
import { eq } from "drizzle-orm";

declare global {
  namespace Express {
    interface User {
      id: number;
      googleId: string;
      email: string;
      name: string | null;
      picture: string | null;
    }
  }
}

export function registerAuthRoutes(app: Express) {
  // Google OAuth initiation
  app.get(
    "/api/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  // Google OAuth callback
  app.get(
    "/api/auth/google/callback",
    (req: Request, res: Response, next) => {
      passport.authenticate("google", (err: any, user: any, info: any) => {
        if (err) {
          console.error("OAuth error:", err);
          return res.redirect("/login?error=auth_failed");
        }
        
        if (!user) {
          if (info?.message === "invite_required") {
            // New user needs an invite - you could redirect to an invite page here
            return res.redirect("/login?error=invite_required");
          }
          return res.redirect("/login?error=auth_failed");
        }
        
        req.login(user, (loginErr) => {
          if (loginErr) {
            console.error("Login error:", loginErr);
            return res.redirect("/login?error=auth_failed");
          }
          res.redirect("/");
        });
      })(req, res, next);
    }
  );

  // Handle invite code submission
  app.post("/api/auth/register-with-invite", async (req: Request, res: Response) => {
    try {
      const { inviteCode, googleProfile } = req.body;

      if (!googleProfile || !inviteCode) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const user = await createUserWithInvite(googleProfile, inviteCode);

      // Log the user in
      req.login(user, (err) => {
        if (err) {
          return res.status(500).json({ message: "Login failed after registration" });
        }
        res.json({ success: true, user });
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Registration failed" });
    }
  });

  // Get current user
  app.get("/api/auth/user", (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    res.json(req.user);
  });

  // Logout
  app.post("/api/auth/logout", (req: Request, res: Response) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      res.json({ success: true });
    });
  });

  // Generate invite code (protected - you might want to add admin check)
  app.post("/api/invites/generate", async (req: Request, res: Response) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
      }

      // Generate random invite code
      const code = crypto.randomBytes(8).toString("hex").toUpperCase();

      const [invite] = await db
        .insert(invites)
        .values({ code })
        .returning();

      res.json(invite);
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Failed to generate invite" });
    }
  });

  // List all invites (protected)
  app.get("/api/invites", async (req: Request, res: Response) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
      }

      const allInvites = await db.select().from(invites);
      res.json(allInvites);
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Failed to fetch invites" });
    }
  });
}
