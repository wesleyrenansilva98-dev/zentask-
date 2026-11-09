import argon2 from "argon2";
import { createModel } from "../../models/user/user_models.js";
import { AppError } from "../../errors/appErr.js";
import { EMAIL_UNIQUE, hashPassword } from "../../utils/user/user_utils.js";

export async function createUserService(dados) {
  try {
    const { username, email, password } = dados;
    const password_hash = await hashPassword(password);
    const dataUser = await createModel(username, email, password_hash);
  } catch (error) {
    if (error.code === "23505" && error.constraint === "users_email_key") {
      throw new AppError("email já cadastrado", EMAIL_UNIQUE, "registered", 409);
    }
    throw error;
  }
}