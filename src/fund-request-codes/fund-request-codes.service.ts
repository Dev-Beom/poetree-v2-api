import { Injectable } from '@nestjs/common';
import { CreateFundRequestCodeDto } from './dto/create-fund-request-code.dto';
import { UpdateFundRequestCodeDto } from './dto/update-fund-request-code.dto';

@Injectable()
export class FundRequestCodesService {
  create(createFundRequestCodeDto: CreateFundRequestCodeDto) {
    return 'This action adds a new fundRequestCode';
  }

  findAll() {
    return `This action returns all fundRequestCodes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fundRequestCode`;
  }

  update(id: number, updateFundRequestCodeDto: UpdateFundRequestCodeDto) {
    return `This action updates a #${id} fundRequestCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} fundRequestCode`;
  }
}
