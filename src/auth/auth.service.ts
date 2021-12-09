import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  hashPassword = (password: string) => {
    return bcrypt.hashSync(password, 8);
  };

  checkPassword = (unencryptedPassword: string, password: string) => {
    if (!bcrypt.compareSync(unencryptedPassword, password)) {
      throw new BadRequestException('Invalid ID or Password');
    }
    return true;
  };
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && this.checkPassword(password, user.password)) {
      const { password, ...result } = user;
      console.log(result);
      return result;
    }
    return null;
  }
}
