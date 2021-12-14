import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from './entities/user.entity';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: '프로필 조회',
    description: '사용자 프로필을 조회한다.',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  findUserById(@Query('id') id: number): Promise<User> {
    return this.usersService.getUserPofile(id);
  }

  @ApiOperation({ summary: '회원가입', description: '회원가입을 한다.' })
  @ApiBody({ type: CreateUserDto })
  @ApiOkResponse({ description: '회원가입 성공' })
  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() userData: CreateUserDto): Promise<User> {
    return this.usersService.signup(userData);
  }
}
