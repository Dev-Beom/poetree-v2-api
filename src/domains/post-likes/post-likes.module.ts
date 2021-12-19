import { Module } from '@nestjs/common';
import { PostLikesService } from './post-likes.service';
import { PostLikesController } from './post-likes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostLikeRepository } from './post-likes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PostLikeRepository])],
  providers: [PostLikesService],
  controllers: [PostLikesController],
})
export class PostLikesModule {}
