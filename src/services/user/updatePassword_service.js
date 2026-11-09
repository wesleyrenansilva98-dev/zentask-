import argon2 from "argon2";
import { findByPasswordId, updatePassword } from "../../models/user/user_models.js";
import { AuthError} from "../../errors/appErr.js";
import { JWT_INVALID } from "../../utils/jwt/jwt_utils.js";
import { ERROR_PASSWORD } from "../../utils/user/user_utils.js";
import { hashPassword } from "../../utils/user/user_utils.js";

export async function updatePasswordService(id, dados) {
  const { currentPassword, newPassword} = dados;
  const user = await findByPasswordId(id);
  if (!user) { 
    throw new AuthError("sessão inválida", JWT_INVALID, "auth");
  }
  const match = await argon2.verify(user.password_hash, currentPassword);
  if (!match) {
    throw new AuthError("senha incorreta", ERROR_PASSWORD, "password", 403);
  }
  const newPasswordHash = await hashPassword(newPassword);
  await updatePassword(id, newPasswordHash);
}