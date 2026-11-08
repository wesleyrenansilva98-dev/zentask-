import { createUserService } from "../../services/user/create_userservice.js"

export async function createUserController(req, res, next) {
  try {
    const data = await createUserService(req.body);
    
    return res.status(201).json({
      success: true,
      message: "conta criada com sucesso",
      data,
      type: "registered"
    });
  } catch (error) {
    next(error)
  }
}