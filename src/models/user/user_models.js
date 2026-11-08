import pool from "../../database/connection.js";

export async function createModel(username, email, password_hash) {
  const { rows } = await pool.query(`
    INSERT INTO users(username, email, password_hash)
    VALUES ($1, $2, $3)
    RETURNING id, username, email, created_at
  `, [username, email, password_hash]);
  return rows[0];
}

export async function findByUser(email) {
  const { rows } = await pool.query(`
    SELECT id, username, email, password_hash FROM users
    WHERE email = $1
  `, [email]);
  return rows[0];
}

export async function authUserData(id) {
  const { rows } = await pool.query(`
    SELECT id, username, email, created_at FROM users
    WHERE id = $1
  `, [id]);
  return rows[0];
}