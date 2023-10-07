import { EUserRole, EUserStatus } from "../enums";

export interface IUser extends Document {
  email: string;
  role: EUserRole;
  status: EUserStatus;
  password: string;
}
