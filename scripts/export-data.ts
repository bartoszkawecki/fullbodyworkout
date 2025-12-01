import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../shared/schema';
import { writeFileSync } from 'fs';
import { mkdirSync } from 'fs';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

async function exportData() {
  try {
    console.log('🔄 Connecting to Neon database...');

    // Export exercise_weights
    console.log('📊 Exporting exercise_weights...');
    const weights = await db.select().from(schema.exerciseWeights);
    console.log(`   Found ${weights.length} weight records`);

    // Export completions
    console.log('✅ Exporting completions...');
    const completions = await db.select().from(schema.completions);
    console.log(`   Found ${completions.length} completion records`);

    // Create backups directory
    mkdirSync('./backups', { recursive: true });

    // Save to JSON files
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const weightsFile = `./backups/exercise_weights_${timestamp}.json`;
    const completionsFile = `./backups/completions_${timestamp}.json`;

    writeFileSync(weightsFile, JSON.stringify(weights, null, 2));
    writeFileSync(completionsFile, JSON.stringify(completions, null, 2));

    console.log('\n✨ Export completed successfully!');
    console.log(`📁 Weights saved to: ${weightsFile}`);
    console.log(`📁 Completions saved to: ${completionsFile}`);
    console.log('\n📊 Summary:');
    console.log(`   - Exercise weights: ${weights.length} records`);
    console.log(`   - Completions: ${completions.length} records`);

  } catch (error) {
    console.error('❌ Error exporting data:', error);
    process.exit(1);
  }
}

exportData();
