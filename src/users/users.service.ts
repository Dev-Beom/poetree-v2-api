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

  async findOneById(id: number): Promise<User> {
    /// findOne 수정
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
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

  async create(userData: CreateUserDto): Promise<User> {
    const existingUser = await this.findOneByEmail(userData.email);
    if (existingUser) {
      throw new ConflictException(`user email already in use`);
    }
    const loginProvider = LoginProvider['local'];

    let user;

    if (loginProvider === 'LOCAL') {
      user = await this.createLocalUser(userData);
    } else if (loginProvider === 'KAKAO') {
      user = await this.createKakaoUser(userData);
    } else if (loginProvider === 'GOOGLE') {
      user = await this.createGoogleUser(userData);
    }

    return user;
  }

  async getUserPofile(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      select: ['id', 'email', 'name', 'description', 'imageUrl'],
      relations: ['items'],
    });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }
}
