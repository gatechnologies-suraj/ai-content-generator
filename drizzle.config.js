/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://neondb_owner:IMq7SUgNXvL0@ep-ancient-breeze-a5cmp5wz.us-east-2.aws.neon.tech/neondb?sslmode=require",
    }
  };