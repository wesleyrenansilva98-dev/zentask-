import { completedTaskService } from "../../services/task/patch_taskservice.js";

export async function completedTaskController(req, res, next) {
  try {
    const dados = req.body;
    const id = req.userId;
    const data = await completedTaskService(id, dados);
    return res.status(200).json({
      success: true,
      message: "task atualizada com sucesso",
      data,
      type: "completed"
  });
  } catch (error) {
    next(error)
  }
}