import * as appErr from "../errors/appErr.js";

export function errGlobal(error, req, res, next) {
  if (error instanceof appErr.AppError) {
    return res.status(error.status).json({
      success: false,
      message: error.message,
      details: error.details,
      type: error.type
    });
  }

  if (error.type === "entity.parse.failed") {
    return res.status(400).json({
      success: false,
      message: "JSON inválido",
      details: [
        {
          field: "all",
          information: "JSON está com formato inválido"
        }
      ],
      type: "request"
    });
  }

  console.error(error);
  return res.status(500).json({
    success: false,
    message: "Erro interno na API",
    details: [
      {
        field: "all",
        information: "Aconteceu um erro inesperado na API"
      }
    ],
    type: "server"
  })
}