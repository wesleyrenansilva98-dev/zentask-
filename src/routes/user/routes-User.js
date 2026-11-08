import express from "express";
import { validate } from "../../middlewares/validate.js";
import { authJwt } from "../../middlewares/validate_jwt.js";
import { inputRegister, inputLogin } from "../../schema/user/user_schema.js";
import { createUserController } from "../../controllers/user/create_usercontroller.js";
import { loginUserController } from "../../controllers/user/login_usercontroller.js";
import { authUserController } from "../../controllers/user/auth_usercontroller.js";

const router = express.Router();

router.post("/registered", validate(inputRegister, 'body'), createUserController);
router.post("/login", validate(inputLogin), loginUserController);
router.get("/auth/me", authJwt, authUserController);

export default router;