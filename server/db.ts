import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "@shared/schema";

// Don't crash at startup - let server start and report the issue via health check
if (!process.env.DATABASE_URL) {
  console.error("WARNING: DATABASE_URL environment variable is not set. Database operations will fail.");
}

// Only create connection if DATABASE_URL is set, otherwise use a dummy placeholder
const sql = process.env.DATABASE_URL
  ? neon(process.env.DATABASE_URL)
  : (() => {
      throw new Error("DATABASE_URL not configured");
    }) as any;

export const db = drizzle(sql, { schema });
