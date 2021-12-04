import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemCodesService } from './item-codes.service';
import { CreateItemCodeDto } from './dto/create-item-code.dto';
import { UpdateItemCodeDto } from './dto/update-item-code.dto';

@Controller('item-codes')
export class ItemCodesController {
  constructor(private readonly itemCodesService: ItemCodesService) {}

  @Post()
  create(@Body() createItemCodeDto: CreateItemCodeDto) {
    return this.itemCodesService.create(createItemCodeDto);
  }

  @Get()
  findAll() {
    return this.itemCodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemCodesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateItemCodeDto: UpdateItemCodeDto,
  ) {
    return this.itemCodesService.update(+id, updateItemCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemCodesService.remove(+id);
  }
}
