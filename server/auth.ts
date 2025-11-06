
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { db } from "./db";
import { users, invites } from "@shared/schema";
import { eq } from "drizzle-orm";

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.warn("⚠️  Google OAuth credentials not configured. Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in Secrets.");
}

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      callbackURL: "/api/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user exists
        let [user] = await db.select().from(users).where(eq(users.googleId, profile.id));

        if (!user) {
          // New user - they will be redirected to invite code page
          return done(null, false, { message: "invite_required" });
        }

        return done(null, user);
      } catch (error) {
        return done(error as Error);
      }
    }
  )
);

export async function createUserWithInvite(googleProfile: any, inviteCode: string) {
  // Verify invite code
  const [invite] = await db
    .select()
    .from(invites)
    .where(eq(invites.code, inviteCode));

  if (!invite || !invite.isActive || invite.usedBy) {
    throw new Error("Invalid or already used invite code");
  }

  // Create user
  const [newUser] = await db
    .insert(users)
    .values({
      googleId: googleProfile.id,
      email: googleProfile.emails?.[0]?.value || "",
      name: googleProfile.displayName,
      picture: googleProfile.photos?.[0]?.value,
    })
    .returning();

  // Mark invite as used
  await db
    .update(invites)
    .set({
      usedBy: newUser.id,
      usedAt: new Date(),
    })
    .where(eq(invites.id, invite.id));

  return newUser;
}
