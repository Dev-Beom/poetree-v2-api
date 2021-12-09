import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findUserById(@Body() id: number) {
    return this.usersService.findOneById(id);
  }
  @Post()
  createUser(@Body() userData: CreateUserDto) {
    return this.usersService.create(userData);
  }
}
