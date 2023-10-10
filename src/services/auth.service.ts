import { ApiError } from "../errors";
import { IUser } from "../interfaces";
import { userRepository } from "../repositories";
import { passwordService } from "./password.service";

class AuthService {
  public async register(dto: IUser): Promise<void> {
    try {
      const hashedPassword = await passwordService.hash(dto.password);
      await userRepository.createUser({ ...dto, password: hashedPassword });
      // await emailService.sendMail(dto.email, EEmailAction.REGISTER, {
      //   name: "Kokos",
      // });
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }
}

export const authService = new AuthService();
