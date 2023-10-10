import Joi from "joi";

import { regexConstant } from "../constants";

export class UserValidator {
  static email = Joi.string().regex(regexConstant.EMAIL).trim();
  static password = Joi.string().min(8).regex(regexConstant.PASSWORD).trim();

  static user = Joi.object({
    email: this.email.required().messages({
      "string.pattern.base": "помилка з поштою",
    }),
    password: this.password.required().messages({
      "string.min": "пароль має бути мінімум 8 символів",
      "string.pattern.base":
        "пароль повинен мати хочаб одну велику літеру, одну цифру та бути тільки з латиниці",
    }),
  });
}
