import { Module } from '@nestjs/common';
import { ItemReviewsService } from './item-reviews.service';
import { ItemReviewsController } from './item-reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemReviewRepository } from './item-reviews.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ItemReviewRepository])],
  controllers: [ItemReviewsController],
  providers: [ItemReviewsService],
})
export class ItemReviewsModule {}
