import { progressTaskService } from "../../services/task/progress_taskservice.js";

export async function progressTaskController(req, res, next) {
  try {
    const id = req.userId;
    const dados = req.body;
    const data = await progressTaskService(id, dados);
    return res.status(200).json({
      success: true,
      message: "progresso atualizado com sucesso",
      data,
      type: "task"
    });
  } catch (error) {
    next(error);
  }
}