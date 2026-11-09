const isProd = process.env.NODE_ENV === "production";

export const COOKIE_CONFIG = {
  httpOnly: true,
  secure: isProd,
  sameSite: isProd ? "none" : "lax",
  path: "/"
}

export const AUTH_COOKIE = {
  ...COOKIE_CONFIG,
  maxAge: 24 * 60 * 60 * 1000
}