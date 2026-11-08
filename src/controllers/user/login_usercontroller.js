import { loginUserService } from "../../services/user/login_userservice.js";

export async function loginUserController(req, res, next) {
  try {
    const data = await loginUserService(req.body);
    res.cookie("access_token", data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000
    });
    return res.status(200).json({
      success: true,
      message: "login realizado com sucesso",
      data: data.user,
      type: "login"
    });
  } catch (error) {
    next(error);
  }
}