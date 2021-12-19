import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { UserRepository } from "./users.repository";
import { hashPassword } from "../../common/utils/utils";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository
  ) {
  }

  async findOneById(id: number): Promise<User> {
    const user = this.userRepository.findUserByID(id);
    if (!user) throw new NotFoundException("user not found");
    return user;
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findUserByEmail(email);
  }

  async createLocalUser(userData: CreateUserDto): Promise<User> {
    const hashedPassword = hashPassword(userData.password);
    return await this.userRepository.saveLocalUser(<User>{ ...userData, password: hashedPassword });
  }

  async createGoogleUser(userData: CreateUserDto) {
    return null;
  }

  async signup(userData: CreateUserDto): Promise<User> {
    const existingUser = await this.findOneByEmail(userData.email);
    if (existingUser) {
      throw new ConflictException(`user email already in use`);
    }
    return await this.createLocalUser(userData);
  }

  async getUserProfile(id: number): Promise<User> {
    const user = await this.userRepository.findUserProfileByID(id);
    if (!user) {
      throw new NotFoundException("user not found");
    }
    return user;
  }
}
