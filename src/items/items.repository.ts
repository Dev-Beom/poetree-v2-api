import { EntityRepository, Repository } from 'typeorm';
import { Item } from '../entities/items.entity';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {}
