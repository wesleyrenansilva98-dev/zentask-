import { findByTaskId, updateProgressModel } from "../../models/task/task_models.js";
import { AuthError } from "../../errors/appErr.js";
import { ERROR_TASK_NOT_EXISTS } from "../../utils/task/task_utils.js";

export async function progressTaskService(user_id, dados) {
  const { task_id, progress } = dados;
  const task = await findByTaskId(user_id, task_id);
  if (!task) {
    throw new AuthError("atividade não existe", ERROR_TASK_NOT_EXISTS, "task")
  }
  const data = await updateProgressModel(user_id, task_id, progress);
  return data;
}