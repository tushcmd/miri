import {
	pgTable,
	serial,
	text,
	timestamp,
	integer,
	date,
	uuid,
	pgSchema,
} from "drizzle-orm/pg-core";
const authSchema = pgSchema("auth");

//const authSchema = pgSchema("auth");

// Not fixed completely
// Reference https://www.answeroverflow.com/m/1145274270847598653 and https://github.com/supabase/supabase/issues/19883#issuecomment-2094656180
// Before doing migrations

// export const Users = authSchema.table("users", {
// 	id: uuid("id").primaryKey(),
// });

// Found answers - https://github.com/supabase/supabase/issues/19883
export const Users = authSchema.table("users", {
	id: uuid("id").primaryKey(),
});

export const profiles = pgTable("profiles", {
	//id: serial('id').primaryKey(),
	id: uuid("id")
		.primaryKey()
		.references(() => Users.id, { onDelete: "cascade" }),
	//avatar_url: text('text'),
	//id: uuid('id').primaryKey().notNull().references(() => auth.users.id, { onDelete: 'cascade' }),
	username: text("username").notNull().unique(),
	email: text("email").notNull().unique(),
	passwordHash: text("password_hash").notNull(),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export const categories = pgTable("categories", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	userId: integer("user_id")
		.references(() => profiles.id)
		.notNull(),
	createdAt: timestamp("created_at").defaultNow(),
});

export const journalEntries = pgTable("journal_entries", {
	id: serial("id").primaryKey(),
	userId: integer("user_id")
		.references(() => profiles.id)
		.notNull(),
	categoryId: integer("category_id").references(() => categories.id),
	title: text("title").notNull(),
	content: text("content").notNull(),
	entryDate: date("entry_date").notNull(),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export type InsertProfile = typeof profiles.$inferInsert;
export type SelectProfile = typeof profiles.$inferSelect;

export type InsertCategory = typeof categories.$inferInsert;
export type SelectCategory = typeof categories.$inferSelect;

export type InsertEntry = typeof journalEntries.$inferInsert;
export type SelectEntry = typeof journalEntries.$inferSelect;
