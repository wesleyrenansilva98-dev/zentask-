import argon2 from "argon2";

export const EMAIL_UNIQUE = [{
  field: "email",
  information: "email já esta cadastrado. Tente com um novo email"
}];

export const USER_CREDENTIALS = [{
  field: "all",
  information: "credenciais inválidas"
}];

export const ERROR_PASSWORD = [{
  field: "currentPassword",
  information: "senha atual incorreta"
}];

export const ERROR_PASSWORD_DELETE = [{
  field: "password",
  information: "senha incorreta"
}]

export async function hashPassword(password) {
  const hash = await argon2.hash(password, {
      type: argon2.argon2id,
      memoryCost: 19456,
      timeCost: 2,
      parallelism: 1
    });
  return hash;
}
