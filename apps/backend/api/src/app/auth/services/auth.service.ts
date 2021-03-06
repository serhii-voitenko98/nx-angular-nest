import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ISignAuthPayload, ISignAuthResponse } from '@nx-angular-nest/shared/data-access/interfaces';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../users/services/user.service';
import { PasswordService } from './password.service';
import { UserEntity } from '../../users/entities/user.entity';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly passwordService: PasswordService,
  ) {
  }

  async validateUser(username: string, pass: string): Promise<Omit<UserEntity, 'password'>> {
    const user = await this.userService.findOneByUserName(username);
    const isValid = user ? await this.passwordService.compareHash(pass, user.password) : false;

    if (isValid) {
      delete user.password;

      return user;
    }

    return null;
  }

  async login(signAuthPayload: ISignAuthPayload): Promise<ISignAuthResponse> {
    const user = await this.validateUser(signAuthPayload.username, signAuthPayload.password);

    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = {
      username: user.username,
      id: user.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      expiresIn: new Date(environment.jwt.expiresIn).getDate(),
      id: user.id,
    };
  }
}
