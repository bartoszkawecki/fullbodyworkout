import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "@shared/schema";

// Don't crash at startup - let server start and report the issue via health check
if (!process.env.DATABASE_URL) {
  console.error("WARNING: DATABASE_URL environment variable is not set. Database operations will fail.");
}

const sql = neon(process.env.DATABASE_URL || 'postgresql://placeholder');
export const db = drizzle(sql, { schema });
