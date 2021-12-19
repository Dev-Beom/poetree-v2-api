import { EntityRepository, Repository } from "typeorm";
import { User } from "./entities/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async saveLocalUser(userDto: User): Promise<User> {
    return await this.save(userDto);
  }

  async findUserByID(id: number): Promise<User> {
    return await this.findOne({
      where: {
        id
      }
    });
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.findOne({
      where: {
        email
      }
    });
  }

  async findUserProfileByID(id: number): Promise<User> {
    return await this.findOne({
      where: { id },
      select: ["id", "email", "name", "description", "imageUrl"],
      relations: ["posts"]
    });
  }
}
