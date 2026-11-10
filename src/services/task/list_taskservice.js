import { listTaskModel } from "../../models/task/task_models.js";

export async function listTaskService(id) {
  const data = await listTaskModel(id);
  return data;
}