import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UnregisteredUsersService } from './unregistered-users.service';
import { CreateUnregisteredUserDto } from './dto/create-unregistered-user.dto';
import { UpdateUnregisteredUserDto } from './dto/update-unregistered-user.dto';

@Controller('unregistered-users')
export class UnregisteredUsersController {
  constructor(
    private readonly unregisteredUsersService: UnregisteredUsersService,
  ) {}

  @Post()
  create(@Body() createUnregisteredUserDto: CreateUnregisteredUserDto) {
    return this.unregisteredUsersService.create(createUnregisteredUserDto);
  }

  @Get()
  findAll() {
    return this.unregisteredUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unregisteredUsersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUnregisteredUserDto: UpdateUnregisteredUserDto,
  ) {
    return this.unregisteredUsersService.update(+id, updateUnregisteredUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unregisteredUsersService.remove(+id);
  }
}
