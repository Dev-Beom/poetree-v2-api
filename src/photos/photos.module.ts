import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosController } from './photos.controller';
import { PhotoRepository } from './photos.repository';
import { PhotosService } from './photos.service';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoRepository])],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}
