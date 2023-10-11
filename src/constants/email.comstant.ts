import { EEmailAction } from "../enums";

export const templates = {
  [EEmailAction.REGISTER]: {
    templateName: "register",
    subject: "Hello, great to see you in our app",
  },
  [EEmailAction.FORGOT_PASSWORD]: {
    templateName: "forgotPassword",
    subject: "Do not worry, we control your password",
  },
};
