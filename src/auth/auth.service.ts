import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { checkPassword } from 'src/utils/utils';
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && checkPassword(password, user.password)) {
      const { password, ...result } = user;
      console.log(result);
      return result;
    }
    return null;
  }
}
