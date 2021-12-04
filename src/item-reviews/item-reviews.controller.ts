import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemReviewsService } from './item-reviews.service';
import { CreateItemReviewDto } from './dto/create-item-review.dto';
import { UpdateItemReviewDto } from './dto/update-item-review.dto';

@Controller('item-reviews')
export class ItemReviewsController {
  constructor(private readonly itemReviewsService: ItemReviewsService) {}

  @Post()
  create(@Body() createItemReviewDto: CreateItemReviewDto) {
    return this.itemReviewsService.create(createItemReviewDto);
  }

  @Get()
  findAll() {
    return this.itemReviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemReviewsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateItemReviewDto: UpdateItemReviewDto,
  ) {
    return this.itemReviewsService.update(+id, updateItemReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemReviewsService.remove(+id);
  }
}
