import { Module } from '@nestjs/common';
import { BlockedUsersService } from './blocked-users.service';
import { BlockedUsersController } from './blocked-users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockedUserRepository } from './blocked-users.reposotiry';

@Module({
  imports: [TypeOrmModule.forFeature([BlockedUserRepository])],
  controllers: [BlockedUsersController],
  providers: [BlockedUsersService],
})
export class BlockedUsersModule {}
