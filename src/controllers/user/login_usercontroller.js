import { loginUserService } from "../../services/user/login_userservice.js";
import { AUTH_COOKIE } from "../../utils/cookies/cookies_utils.js";

export async function loginUserController(req, res, next) {
  try {
    const data = await loginUserService(req.body);
    res.cookie("access_token", data.token, AUTH_COOKIE);
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