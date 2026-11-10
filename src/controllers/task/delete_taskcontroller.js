import { deleteTaskService } from "../../services/task/delete_taskservice.js";

export async function deleteTaskController(req, res, next) {
  try {
    const id = req.userId;
    const dados = req.body;
    await deleteTaskService(id, dados);
    return res.status(200).json({
      success: true,
      message: "atividade deletada com sucesso",
      type: "task"
    })
  } catch (error) {
    next(error);
  }
}