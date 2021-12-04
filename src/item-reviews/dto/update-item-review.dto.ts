import { PartialType } from '@nestjs/mapped-types';
import { CreateItemReviewDto } from './create-item-review.dto';

export class UpdateItemReviewDto extends PartialType(CreateItemReviewDto) {}
