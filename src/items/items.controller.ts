import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateItemDto } from './dto';
// import { ItemStatus } from './item-status.enum';
import { Item } from '../entities/items.entity';
import { ItemsService } from './items.service';
// import { ItemStatusValidationPipe } from './pipes/item-status-validation.pipe';
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  // @Get()
  // getAllBoards() {
  //   const items = this.itemsService.getAllItems();
  //   console.log(items);
  //   return items;
  // }

  @Get('/:id')
  getItemById(@Param('id') id: number): Promise<Item> {
    return this.itemsService.getItemById(id);
  }
  @Post()
  @UsePipes(ValidationPipe)
  createItem(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.createItem(createItemDto);
  }

  // @Patch('/:id/status')
  // updateItemStatus(
  //   @Param('id') id: string,
  //   @Body('status', ItemStatusValidationPipe) status: ItemStatus,
  // ) {
  //   return this.itemsService.updateItemStatus(id, status);
  // }
}
