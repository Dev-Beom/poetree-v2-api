import { Injectable } from '@nestjs/common';
import { CreateUnregisteredUserDto } from './dto/create-unregistered-user.dto';
import { UpdateUnregisteredUserDto } from './dto/update-unregistered-user.dto';

@Injectable()
export class UnregisteredUsersService {
  create(createUnregisteredUserDto: CreateUnregisteredUserDto) {
    return 'This action adds a new unregisteredUser';
  }

  findAll() {
    return `This action returns all unregisteredUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unregisteredUser`;
  }

  update(id: number, updateUnregisteredUserDto: UpdateUnregisteredUserDto) {
    return `This action updates a #${id} unregisteredUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} unregisteredUser`;
  }
}
