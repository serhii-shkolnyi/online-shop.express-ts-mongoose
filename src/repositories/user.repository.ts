import { FilterQuery } from "mongoose";

import { IUser } from "../interfaces";
import { User } from "../models";

class UserRepository {
  public async createUser(dto: IUser): Promise<IUser> {
    return await User.create(dto);
  }

  public async getAll(): Promise<IUser[]> {
    return await User.find();
  }

  public async getOneByParams(
    params: FilterQuery<IUser | null>,
  ): Promise<IUser | null> {
    return await User.findOne(params);
  }
}

export const userRepository = new UserRepository();
