import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './users.repository';
import { hashPassword, LoginProvider } from '../utils/utils';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async findUserById(id: number): Promise<User> {
    const user = this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`user id ${id} not found`);
    }
    return user;
  }

  async findUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  async createLocalUser(userData: CreateUserDto): Promise<User> {
    const hashedPassword = hashPassword(userData.password);
    const newUser = await this.userRepository.save({
      ...userData,
      password: hashedPassword,
    });

    return newUser;
  }

  async createKakaoUser(userData: CreateUserDto) {
    return null;
  }

  async createGoogleUser(userData: CreateUserDto) {
    return null;
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    const existingUser = await this.findUserByEmail(userData.email);
    if (existingUser) {
      throw new ConflictException(`user email already in use`);
    }
    const loginProvider = LoginProvider[userData.loginProvider];

    let user;

    if (loginProvider === 'LOCAL') {
      user = await this.createLocalUser(userData);
    } else if (loginProvider === 'KAKAO') {
      user = await this.createKakaoUser(userData);
    } else if (loginProvider === 'GOOGLE') {
      user = await this.createGoogleUser(userData);
    }
    console.log(user);
    return user;
  }
}
