import bcrypt from "bcrypt";

import { apiConfig } from "../configs";

class PasswordService {
  public async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, +apiConfig.SECRET_SALT_ROUNDS);
  }

  public async compare(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}

export const passwordService = new PasswordService();
