import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from 'src/domains/categories/categories.module';
import { PhotosController } from './photos.controller';
import { PhotoRepository } from './photos.repository';
import { PhotosService } from './photos.service';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoRepository]), CategoriesModule],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}
