import { createTaskModel } from "../../models/task/task_models.js";

export async function createTaskService(id, dados) {
  const { taskname, description, progress } = dados;
  const task = await createTaskModel(taskname, description, progress, id);
  return task;
}