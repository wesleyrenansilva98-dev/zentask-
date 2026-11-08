import jwt from "jsonwebtoken";

export const JWT_UNAUTHORIZED = [{
    field: "all",
    information: "faça login para continuar"
}];

export const JWT_INVALID = [{
    field: "all",
    information: "faça login novamente"
}];

export function createJwt(id) {
  const token = jwt.sign({ sub: String(id)}, process.env.JWT_SECRET, {expiresIn: "1d"});
  
  return token;
}