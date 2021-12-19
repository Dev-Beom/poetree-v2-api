import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostRepository } from './posts.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PostRepository])],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
