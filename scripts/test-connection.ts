import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../shared/schema';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

async function testConnection() {
  try {
    console.log('🔄 Testing connection to Supabase...');

    // Test query - count records
    const weights = await db.select().from(schema.exerciseWeights);
    const completions = await db.select().from(schema.completions);

    console.log('✅ Connection successful!');
    console.log('\n📊 Data verification:');
    console.log(`   - Exercise weights: ${weights.length} records`);
    console.log(`   - Completions: ${completions.length} records`);

    // Show a sample record
    if (weights.length > 0) {
      console.log('\n📝 Sample weight record:');
      console.log(`   Week ${weights[0].week}, Day ${weights[0].day}: ${weights[0].exerciseName} - ${weights[0].weight}kg`);
    }

    console.log('\n✨ Supabase database is ready to use!');

  } catch (error) {
    console.error('❌ Connection failed:', error);
    process.exit(1);
  }
}

testConnection();
