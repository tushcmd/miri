import { Config, defineConfig } from "drizzle-kit";

import * as dotenv from "dotenv";

dotenv.config({
    path: '.env',
});

if (!process.env.DATABASE_URL) {
	throw new Error("DATABASE_URL is missing");
}

export default defineConfig({
    //driver: "postgres",
    schemaFilter: ["public"],
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    schema: ['db/index.ts'],
    out: './db/drizzle',
}) satisfies Config;

// import { defineConfig } from "drizzle-kit";

// import * as dotenv from "dotenv";

// dotenv.config({
//     path: '.env',
// });

// if (!process.env.DATABASE_URL) {
// 	throw new Error("DATABASE_URL is missing");
// }

// export default defineConfig({
//     dialect: "postgresql",
//     dbCredentials: {
//         url: process.env.DATABASE_URL,
//     },
//     schema: ['db/index.ts'],
//     out: './db/drizzle',
// });
