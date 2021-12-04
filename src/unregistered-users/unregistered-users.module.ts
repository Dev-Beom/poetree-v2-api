import { Module } from '@nestjs/common';
import { UnregisteredUsersService } from './unregistered-users.service';
import { UnregisteredUsersController } from './unregistered-users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnregisteredUserRepository } from './unregistered-users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UnregisteredUserRepository])],
  controllers: [UnregisteredUsersController],
  providers: [UnregisteredUsersService],
})
export class UnregisteredUsersModule {}
