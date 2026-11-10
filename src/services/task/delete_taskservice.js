import { findByTaskId, deleteTask } from "../../models/task/task_models.js";
import { AuthError } from "../../errors/appErr.js";
import { ERROR_TASK_NOT_EXISTS } from "../../utils/task/task_utils.js";

export async function deleteTaskService(user_id, dados) {
  const { task_id } = dados;
  const task = await findByTaskId(user_id, task_id);
  if (!task) {
    throw new AuthError("atividade não existe", ERROR_TASK_NOT_EXISTS, "task")
  }
  await deleteTask(task_id, user_id);
}