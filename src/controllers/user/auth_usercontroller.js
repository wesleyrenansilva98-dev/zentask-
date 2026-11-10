import { authUserService } from "../../services/user/auth_userservice.js";

export async function authUserController(req, res) {
  const id = req.userId;
  const data = await authUserService(id);
  return res.status(200).json({
    success: true,
    message: "dados carregados com sucesso",
    data,
    type: "request"
  });
} 
