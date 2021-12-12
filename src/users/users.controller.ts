import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  findUserById(@Query('id') id: number): Promise<User> {
    return this.usersService.getUserPofile(id);
  }

  @Post()
  createUser(@Body() userData: CreateUserDto): Promise<User> {
    return this.usersService.create(userData);
  }
}
