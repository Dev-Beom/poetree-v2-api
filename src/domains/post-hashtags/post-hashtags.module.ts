import { Module } from '@nestjs/common';
import { PostHashtagsService } from './post-hashtags.service';
import { PostHashtagsController } from './post-hashtags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostHashtagRepository } from './post-hashtags.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PostHashtagRepository])],
  providers: [PostHashtagsService],
  controllers: [PostHashtagsController],
})
export class PostHashtagsModule {}
