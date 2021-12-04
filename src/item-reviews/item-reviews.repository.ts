import { EntityRepository, Repository } from 'typeorm';
import { ItemReview } from './entities/item-review.entity';

@EntityRepository(ItemReview)
export class ItemReviewRepository extends Repository<ItemReview> {}
