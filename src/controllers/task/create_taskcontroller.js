import { createTaskService } from "../../services/task/create_taskservice.js";

export async function createTaskController(req, res, next) {
    const id = req.userId;
    const dados = req.body;
    const data = await createTaskService(id, dados);
    return res.status(201).json({
      success: true,
      message: "atividade criado com sucesso",
      data,
      type: "task"
    });
}