import { EntityRepository, Repository } from 'typeorm';
import { ItemCode } from './entities/item-code.entity';

@EntityRepository(ItemCode)
export class ItemCodeRepository extends Repository<ItemCode> {}
