import { Module } from '@nestjs/common';
import { HashtagsService } from './hashtags.service';
import { HashtagsController } from './hashtags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HashtagRepository } from './hashtag.repository';

@Module({
  imports: [TypeOrmModule.forFeature([HashtagRepository])],
  providers: [HashtagsService],
  controllers: [HashtagsController],
})
export class HashtagsModule {}
