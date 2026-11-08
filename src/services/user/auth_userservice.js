import { authUserData } from "../../models/user/user_models.js";

export async function authUserService(id) {
  const data = await authUserData(id);
  return data;
}