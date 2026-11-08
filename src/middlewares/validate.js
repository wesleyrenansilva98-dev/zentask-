import { AppError } from "../errors/appErr.js";

export function validate(schema, source = 'body') {
  return (req, res, next) => {
    const result = schema.safeParse(req[source] ?? {});
    if (!result.success) {
      const formtMsg = result.error.issues.map((issue) => ({
        field: issue.path.join(".") || "all",
        information: issue.message
      }));
      return next(new AppError("dados incorretos", formtMsg, "validation", 400));
    }
    req.body = result.data;
    next()
  }
}