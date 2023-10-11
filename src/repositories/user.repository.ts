import { FilterQuery } from "mongoose";

import { IUser, IUserCredentials } from "../interfaces";
import { User } from "../models";

class UserRepository {
  public async createUser(dto: IUserCredentials): Promise<IUser> {
    return await User.create(dto);
  }

  public async getAll(): Promise<IUser[]> {
    return await User.find();
  }

  public async getOneByParams(params: FilterQuery<IUser>): Promise<IUser> {
    return await User.findOne(params);
  }
}

export const userRepository = new UserRepository();
