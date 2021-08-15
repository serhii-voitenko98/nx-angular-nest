import { Injectable } from '@nestjs/common';
import { ISignAuthPayload, ISignAuthResponse } from '@nx-angular-nest/shared/data-access/interfaces';

@Injectable()
export class AuthService {
  login(signAuthPayload: ISignAuthPayload): Promise<ISignAuthResponse> {
    return
    // {
    //   accessToken: // JWT
    //   expiresIn: // JWT
    //   id: // user service
    // };
  }
}
