// src/lib/server/db/index.ts
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema'; // Import your schema definitions
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
	throw new Error('DATABASE_URL environment variable is required.');
}

// Disable prefetch as it is not supported for "Transaction" pool mode
// Prevent variables from leaking out of the API route handler
// You can potentially use a connection pool for better performance in production
// See: https://github.com/porsager/postgres?tab=readme-ov-file#connection-pooling
const client = postgres(process.env.DATABASE_URL, { prepare: false });

// Initialize Drizzle with the client and schema
export const db = drizzle(client, { schema });

// You might want to export the client too if needed elsewhere, but often just db is sufficient
// export { client };
