// drizzle.config.ts
import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' }); // Load environment variables from .env

if (!process.env.DATABASE_URL) {
	throw new Error('DATABASE_URL environment variable is required.');
}

export default {
	schema: './src/lib/server/db/schema.ts', // Path to your schema file
	out: './drizzle', // Directory where migration files will be generated
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL
	},
	verbose: true, // Optional: Print more details during operations
	strict: true // Optional: Exit if warnings occur during generation
} satisfies Config;
