import { EntityRepository, Repository } from 'typeorm';
import { Item } from './items.entity';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {}
