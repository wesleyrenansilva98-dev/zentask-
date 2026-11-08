export class AppError extends Error {
  constructor(message, details, type, status = 400) {
    super(message);
    this.details = details;
    this.type = type;
    this.status = status;
  }
}

export class AuthError extends AppError {
  constructor(message, details, type, status = 401) {
    super(message, details, type, status);
  }
}