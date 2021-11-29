import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v1 as uuid } from 'uuid';
import { CreateItemDto } from './dto';
import { ItemStatus } from './item-status.enum';
import { Item } from './items.entity';
import { ItemRepository } from './items.repository';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemRepository)
    private itemRepository: ItemRepository,
  ) {}
  // getAllItems() {
  //   return this.items;
  // }
  async getItemById(id: number): Promise<Item> {
    const found = await this.itemRepository.findOne(id);
    if (!found) {
      throw new NotFoundException('item not found');
    }
    return found;
  }
  // createItem(createItemDto: CreateItemDto) {
  //   const { title } = createItemDto;
  //   return title;
  // }
  // deleteItem(id: string): void {
  //   const found = this.getItemById(id);
  //   this.items = this.items.filter((item) => item.id !== found.id);
  // }
  // updateItemStatus(id: string, status: ItemStatus): Item {
  //   const item = this.getItemById(id);
  //   item.status = status;
  //   return item;
  // }
}
