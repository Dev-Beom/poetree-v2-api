import { Injectable } from '@nestjs/common';
import { CreateItemCodeDto } from './dto/create-item-code.dto';
import { UpdateItemCodeDto } from './dto/update-item-code.dto';

@Injectable()
export class ItemCodesService {
  create(createItemCodeDto: CreateItemCodeDto) {
    return 'This action adds a new itemCode';
  }

  findAll() {
    return `This action returns all itemCodes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemCode`;
  }

  update(id: number, updateItemCodeDto: UpdateItemCodeDto) {
    return `This action updates a #${id} itemCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemCode`;
  }
}
