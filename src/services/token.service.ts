import * as jwt from "jsonwebtoken";

import { apiConfig } from "../configs";
import { ITokenPayload, ITokensPair } from "../interfaces";

class TokenService {
  public generateTokensPair(payload: ITokenPayload): ITokensPair {
    const accessToken = jwt.sign(payload, apiConfig.SECRET_ACCESS_KEY, {
      expiresIn: apiConfig.EXPIRES_IN_ACCESS,
    });
    const refreshToken = jwt.sign(payload, apiConfig.SECRET_REFRESH_KEY, {
      expiresIn: apiConfig.EXPIRES_IN_REFRESH,
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}

export const tokenService = new TokenService();
