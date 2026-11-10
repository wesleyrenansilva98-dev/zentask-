import { findByTaskId, completedTaskModel } from "../../models/task/task_models.js";
import { AuthError } from "../../errors/appErr.js";
import { ERROR_TASK_NOT_EXISTS } from "../../utils/task/task_utils.js";
  
export async function completedTaskService(user_id, dados) {
  const { task_id, completed } = dados;
  console.log(dados)
  const task = await findByTaskId(user_id, task_id);
  console.log(task);
  if (!task) {
    throw new AuthError("atividade não existe", ERROR_TASK_NOT_EXISTS, "task")
  }
  const taskUser = await completedTaskModel(task_id, completed, user_id);
  return taskUser;
}