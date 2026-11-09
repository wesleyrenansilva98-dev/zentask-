import argon2 from "argon2";
import { deleteUser, findByPasswordId} from "../../models/user/user_models.js";
import { AuthError } from "../../errors/appErr.js";
import { JWT_INVALID } from "../../utils/jwt/jwt_utils.js";
import { ERROR_PASSWORD_DELETE } from "../../utils/user/user_utils.js";

export async function deleteUserService(id, dados) {
  const { password } = dados;
  const user = await findByPasswordId(id);
  if (!user) {
    throw new AuthError("sessão inválida", JWT_INVALID, "auth");
  }
  
  const match = await argon2.verify(user.password_hash, password);
  if (!match) {
    throw new AuthError("senha incorreta", ERROR_PASSWORD_DELETE, "password", 403);
  }
  await deleteUser(id);
}