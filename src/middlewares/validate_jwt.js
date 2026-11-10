import jwt from "jsonwebtoken";
import { AuthError } from "../errors/appErr.js";
import { JWT_UNAUTHORIZED, JWT_INVALID } from "../utils/jwt/jwt_utils.js";

export async function authJwt(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) {
    return next(new AuthError("não autenticado", JWT_UNAUTHORIZED, "auth", 401));
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = Number(payload.sub);
  } catch (error) {
    res.clearCookie("access_token");
    return next(new AuthError("sessão expirada ou não informada", JWT_INVALID , "auth", 401))
  }
  next();
}
