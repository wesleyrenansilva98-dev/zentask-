import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
  connectionTimeoutMillis: 20000,
  idleTimeouyMillis: 10000,
  KeepAlive: true
});

pool.on('error', (error) => {
  console.log("Conexão ociosa do banco falhou:", error.code);
});

export default pool;