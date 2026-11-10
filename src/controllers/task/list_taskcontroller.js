import { listTaskService } from "../../services/task/list_taskservice.js";

export async function listTaskController(req, res) {
  const id = req.userId;
  const data = await listTaskService(id);
  return res.status(200).json({
    success: true,
    message: "atividades carregadas com sucesso",
    data,
    type: "task"
  })
}