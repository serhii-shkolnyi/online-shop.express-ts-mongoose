import { model, Schema } from "mongoose";

import { EUserRole, EUserStatus } from "../enums";
import { IUser } from "../interfaces";

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      enum: EUserRole,
      default: EUserRole.Customer,
    },
    status: {
      type: String,
      required: true,
      enum: EUserStatus,
      default: EUserStatus.Inactive,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = model<IUser>("user", userSchema);
