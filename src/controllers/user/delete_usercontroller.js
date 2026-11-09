import { deleteUserService } from "../../services/user/delete_userservice.js"
import { COOKIE_CONFIG } from "../../utils/cookies/cookies_utils.js";

export async function deleteUserController(req, res, next) {
  try {
    const id = req.userId;
    const dados = req.body;
    await deleteUserService(id, dados);
    res.clearCookie("access_token", COOKIE_CONFIG);
    return res.status(200).json({
      success: true,
      message: "usuario deletado com sucesso",
      type: "delete"
    });
  } catch (error) {
    next(error);
  }
}