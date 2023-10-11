import { EEmailAction } from "../enums";
import { ApiError } from "../errors";
import { ITokensPair, IUser, IUserCredentials } from "../interfaces";
import { tokenRepository, userRepository } from "../repositories";
import { emailService } from "./email.service";
import { passwordService } from "./password.service";
import { tokenService } from "./token.service";

class AuthService {
  public async register(dto: IUserCredentials): Promise<void> {
    try {
      const hashedPassword = await passwordService.hash(dto.password);
      await userRepository.createUser({ ...dto, password: hashedPassword });
      await emailService.sendMail(dto.email, EEmailAction.REGISTER, {
        email: dto.email,
      });
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async login(dto: IUser): Promise<ITokensPair> {
    try {
      const user = await userRepository.getOneByParams({ email: dto.email });

      if (!user) {
        throw new ApiError("Надано недійсні облікові дані", 401);
      }

      const isMatched = await passwordService.compare(
        dto.password,
        user.password,
      );
      if (!isMatched) {
        throw new ApiError("Надано недійсні облікові дані", 401);
      }

      const tokensPair = tokenService.generateTokensPair({ userId: user._id });

      await tokenRepository.create({ ...tokensPair, _userId: user._id });

      return tokensPair;
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }
}

export const authService = new AuthService();
