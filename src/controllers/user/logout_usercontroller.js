import { COOKIE_CONFIG } from "../../utils/cookies/cookies_utils.js";

export function logoutUserController(req, res) {
  res.clearCookie("access_token", COOKIE_CONFIG);
  return res.status(200).json({
    success: true,
    message: "logout realizado com sucesso",
    type: "logout"
  });
}