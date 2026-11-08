import argon2 from "argon2";
import { createModel } from "../../models/user/user_models.js";
import { AppError } from "../../errors/appErr.js";
import { EMAIL_UNIQUE } from "../../utils/user/user_utils.js";

export async function createUserService(dados) {
  try {
    const { username, email, password } = dados;
    const password_hash = await argon2.hash(password, {
      type: argon2.argon2id,
      memoryCost: 19456,
      timeCost: 2,
      parallelism: 1
    });
    const dataUser = await createModel(username, email, password_hash);
    return dataUser;
  } catch (error) {
    if (error.code === "23505" && error.constraint === "users_email_key") {
      throw new AppError("email já cadastrado", EMAIL_UNIQUE, "registered", 409);
    }
    throw error;
  }
}