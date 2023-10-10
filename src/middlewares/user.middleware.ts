import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors";
import { userRepository } from "../repositories";

class UserMiddleware {
  public async isEmailUniq(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;

      const user = await userRepository.getOneByParams({ email });
      if (user) {
        throw new ApiError("Така єлектронная пошта вже існує", 409);
      }

      next();
    } catch (e) {
      next(e);
    }
  }
}

export const userMiddleware = new UserMiddleware();
