import argon2 from "argon2";
import { randomUUID } from "node:crypto";
import { findByUser } from "../../models/user/user_models.js";
import { AuthError } from "../../errors/appErr.js";
import { USER_CREDENTIALS } from "../../utils/user/user_utils.js";
import { createJwt } from "../../utils/jwt/jwt_utils.js";

const DUMMY_HASH = await argon2.hash(randomUUID(), {
  type: argon2.argon2id,
  memoryCost: 19456,
  timeCost: 2,
  parallelism: 1
});

export async function loginUserService(dados) {
  const { email, password } = dados;
  const user = await findByUser(email);
  const match = await argon2.verify(user ? user.password_hash : DUMMY_HASH, password);
  if (!user || !match) {
    throw new AuthError("credenciais inválidas", USER_CREDENTIALS, "login")
  }
  const token = createJwt(user.id);
  const { password_hash, ...safeUser } = user;
  return {
    user: safeUser,
    token
  }
}