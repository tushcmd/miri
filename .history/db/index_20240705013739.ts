// import { drizzle } from 'drizzle-orm/node-postgres';
// import { Pool } from 'pg';
// import * as schema from './schema';

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// export const db = drizzle(pool, { schema });

// import { drizzle } from 'drizzle-orm/postgres-js'
// import postgres from 'postgres'
// import { users } from './schema'

// const connectionString = process.env.DATABASE_URL

// const client = postgres(connectionString)
// const db = drizzle(client);

// const allUsers = await db.select().from(users);