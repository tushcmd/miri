import { pgTable, serial, text, timestamp, integer, date, uuid, pgSchema } from 'drizzle-orm/pg-core';

//const authSchema = pgSchema("auth");

// Not fixed completely
// Reference https://www.answeroverflow.com/m/1145274270847598653 and https://github.com/supabase/supabase/issues/19883#issuecomment-2094656180
// Before doing migrations

// export const Users = authSchema.table("users", {
// 	id: uuid("id").primaryKey(),
// });

export const users = pgTable('users', {
  //id: serial('id').primaryKey(),
  id: uuid("id").primaryKey(),
  username: text('username').notNull().unique(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  userId: integer('user_id').references(() => users.id).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const journalEntries = pgTable('journal_entries', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id).notNull(),
  categoryId: integer('category_id').references(() => categories.id),
  title: text('title').notNull(),
  content: text('content').notNull(),
  entryDate: date('entry_date').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});