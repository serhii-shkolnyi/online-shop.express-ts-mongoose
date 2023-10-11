import { Router } from "express";

import { authController } from "../controllers";
import { commonMiddleware, userMiddleware } from "../middlewares";
import { UserValidator } from "../validators";

const router = Router();

router.post(
  "/register",
  commonMiddleware.isBodyValid(UserValidator.user),
  userMiddleware.isEmailUniq,
  authController.register,
);

router.post(
  "/login",
  commonMiddleware.isBodyValid(UserValidator.user),
  authController.login,
);

export const authRouter = router;
