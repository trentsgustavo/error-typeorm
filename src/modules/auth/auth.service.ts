import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/Login.dto';

@Injectable()
export class AuthService {
  async signIn(payload: LoginDto): Promise<LoginDto> {
    try {
      return payload;
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
