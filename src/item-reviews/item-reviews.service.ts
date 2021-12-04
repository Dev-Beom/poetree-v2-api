import { Injectable } from '@nestjs/common';
import { CreateItemReviewDto } from './dto/create-item-review.dto';
import { UpdateItemReviewDto } from './dto/update-item-review.dto';

@Injectable()
export class ItemReviewsService {
  create(createItemReviewDto: CreateItemReviewDto) {
    return 'This action adds a new itemReview';
  }

  findAll() {
    return `This action returns all itemReviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemReview`;
  }

  update(id: number, updateItemReviewDto: UpdateItemReviewDto) {
    return `This action updates a #${id} itemReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemReview`;
  }
}
