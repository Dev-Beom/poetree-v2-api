import { Module } from '@nestjs/common';
import { FollowsService } from './follows.service';
import { FollowsController } from './follows.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FollowRepository } from './follows.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FollowRepository])],
  providers: [FollowsService],
  controllers: [FollowsController],
})
export class FollowsModule {}
