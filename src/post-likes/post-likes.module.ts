import { Module } from '@nestjs/common';
import { PostLikesService } from './post-likes.service';
import { PostLikesController } from './post-likes.controller';

@Module({
  providers: [PostLikesService],
  controllers: [PostLikesController]
})
export class PostLikesModule {}
