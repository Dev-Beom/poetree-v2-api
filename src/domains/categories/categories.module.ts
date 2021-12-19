import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { CategoryRepository } from './categories.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryRepository])],
  exports: [CategoriesService],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
