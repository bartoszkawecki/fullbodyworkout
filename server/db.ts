import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@shared/schema";

// Don't crash at startup - let server start and report the issue via health check
if (!process.env.DATABASE_URL) {
  console.error("WARNING: DATABASE_URL environment variable is not set. Database operations will fail.");
}

// Only create connection if DATABASE_URL is set, otherwise use a dummy placeholder
const connectionString = process.env.DATABASE_URL || "";
const client = connectionString
  ? postgres(connectionString)
  : null;

export const db = client ? drizzle(client, { schema }) : null as any;
