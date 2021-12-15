import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './users.repository';
import { hashPassword, LoginProvider } from '../common/utils/utils';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async findOneById(id: number): Promise<User> {
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

  async createGoogleUser(userData: CreateUserDto) {
    return null;
  }

  async signup(userData: CreateUserDto): Promise<User> {
    const existingUser = await this.findOneByEmail(userData.email);
    if (existingUser) {
      throw new ConflictException(`user email already in use`);
    }

    const user = await this.createLocalUser(userData);

    return user;
  }

  async getUserPofile(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      select: ['id', 'email', 'name', 'description', 'imageUrl'],
      relations: ['posts'],
    });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }
}
