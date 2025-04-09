import {
	pgTable,
	serial,
	text,
	varchar,
	timestamp,
	primaryKey,
	integer
} from 'drizzle-orm/pg-core';

// Example Meeting Table
export const meetings = pgTable('meetings', {
	id: serial('id').primaryKey(), // Auto-incrementing primary key
	name: varchar('name', { length: 256 }).notNull(),
	description: text('description'),
	// uniqueSlug: varchar('unique_slug', { length: 50 }).unique().notNull(), // Example: if you need a unique URL identifier
	createdAt: timestamp('created_at', { mode: 'date', withTimezone: true }).defaultNow().notNull()
	// Add creatorId if you implement users/auth later
	// creatorId: integer('creator_id').references(() => users.id)
});

// Example Availability Table
// Tracks when a specific *user* (or participant identified somehow) is free for a meeting
export const availabilities = pgTable('availabilities', {
	id: serial('id').primaryKey(),
	meetingId: integer('meeting_id')
		.notNull()
		.references(() => meetings.id, { onDelete: 'cascade' }), // Foreign key linking to meetings
	participantName: varchar('participant_name', { length: 100 }).notNull(), // Simple name for now, could be userId if you have auth
	startTimeUtc: timestamp('start_time_utc', { mode: 'date', withTimezone: true }).notNull(), // IMPORTANT: Store in UTC!
	endTimeUtc: timestamp('end_time_utc', { mode: 'date', withTimezone: true }).notNull() // IMPORTANT: Store in UTC!
});

// If you add users/auth later:
// export const users = pgTable('users', {
//   id: serial('id').primaryKey(),
//   email: varchar('email', { length: 256 }).unique().notNull(),
//   name: varchar('name', { length: 256 }),
//   // ... other fields like hashed password etc.
// });

// Add other tables as needed (e.g., participants linking users to meetings)
