import { z } from "zod";

export const inputRegister = z.object({
  username: z.string({error: "preencha o nome"}).trim().min(2, "nome muito curto").max(55, "nome muito longo"),
  email: z.string({error: "preencha o email"}).trim().email("email está com formato inválido").max(254, "email muito longo").toLowerCase(),
  password: z.string({error: "preencha a senha"}).min(8, "senha no mínimo 8 caracteres").max(128, "senha muito longa")
});

export const inputLogin = z.object({
  email: z.string({error: "preencha o email"}).trim().email("formato inválido").max(254, "email muito longo").toLowerCase(),
  password: z.string({error: "preencha a senha"}).min(1, "preencha a senha").max(128, "senha muito longa")
});

export const inputChangePassword = z.object({
  currentPassword: z.string({error: "preencha a senha atual"}).min(1, "preencha a senha atual").max(128, "senha muito longa"),
  newPassword: z.string({error: "preencha nova senha"}).min(8, "senha no mínimo 8 caracteres").max(128, "senha muito longa")
}).refine((pass) => pass.currentPassword !== pass.newPassword, {
  error: "a nova senha deve ser diferente da atual",
  path: ["newPassword"]
});

export const inputPasswordDelete = z.object({
  password: z.string({error: "preencha a senha"}).min(1, "preencha a senha").max(128, "senha muito longa")
})