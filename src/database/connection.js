import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL_TEST,
  max: 20,
  connectionTimeoutMillis: 20000,
  idleTimeouMillis: 10000
});

export default pool;