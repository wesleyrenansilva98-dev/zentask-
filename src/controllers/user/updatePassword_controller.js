import { updatePasswordService } from "../../services/user/updatePassword_service.js";

export async function updatePasswordController(req, res, next) {
  try {
    const id = req.userId;
    const data = await updatePasswordService(id, req.body);
    return res.status(200).json({
      success: true,
      message: "senha atualizada com sucesso",
      type: "password"
    });
  } catch (error) {
    next(error);
  }
}