import { Injectable } from '@nestjs/common';
import { CreateFundCodeDto } from './dto/create-fund-code.dto';
import { UpdateFundCodeDto } from './dto/update-fund-code.dto';

@Injectable()
export class FundCodesService {
  create(createFundCodeDto: CreateFundCodeDto) {
    return 'This action adds a new fundCode';
  }

  findAll() {
    return `This action returns all fundCodes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fundCode`;
  }

  update(id: number, updateFundCodeDto: UpdateFundCodeDto) {
    return `This action updates a #${id} fundCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} fundCode`;
  }
}
