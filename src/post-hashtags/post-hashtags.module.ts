import { Module } from '@nestjs/common';
import { PostHashtagsService } from './post-hashtags.service';
import { PostHashtagsController } from './post-hashtags.controller';

@Module({
  providers: [PostHashtagsService],
  controllers: [PostHashtagsController]
})
export class PostHashtagsModule {}
