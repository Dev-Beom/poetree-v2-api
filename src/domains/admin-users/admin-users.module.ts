import { Module } from '@nestjs/common';
import { AdminUsersService } from './admin-users.service';
import { AdminUsersController } from './admin-users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUserRepository } from './admin-users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AdminUserRepository])],
  controllers: [AdminUsersController],
  providers: [AdminUsersService],
})
export class AdminUsersModule {}
