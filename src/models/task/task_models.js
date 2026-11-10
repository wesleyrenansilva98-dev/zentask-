import pool from "../../database/connection.js";

export async function createTaskModel(taskname, description, progress, id) {
  const { rows } = await pool.query(`
    INSERT INTO tasks(taskname, description, progress, user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING id, taskname, description, completed, progress, created_at
  `, [taskname, description ?? null, progress, id]);
  return rows[0];
}

export async function listTaskModel(id) {
  const { rows } = await pool.query(`
    SELECT id, taskname, description, completed, progress, created_at FROM tasks
    WHERE user_id = $1
    ORDER BY taskname
  `, [id]);
  return rows;
}

export async function findByTaskId(user_id, id) {
  const { rows } = await pool.query(`
    SELECT taskname, completed FROM tasks
    WHERE user_id = $1 AND id = $2
  `, [user_id, id]);
  return rows[0];
}

export async function completedTaskModel(id, completed, user_id) {
  const { rows } = await pool.query(`
    UPDATE tasks SET completed = $1
    WHERE user_id = $2 AND id = $3
    RETURNING taskname, completed
  `, [completed, user_id, id]);
  return rows[0];
}

export async function updateProgressModel(user_id, id, progress) {
  const { rows } = await pool.query(`
    UPDATE tasks SET progress = $1
    WHERE user_id = $2 AND id = $3
    RETURNING taskname, progress
  `, [progress, user_id, id]);
  return rows[0];
}

export async function deleteTask(id, user_id) {
  await pool.query(`
    DELETE FROM tasks
    WHERE user_id = $1 AND id = $2
  `, [user_id, id]);
}
