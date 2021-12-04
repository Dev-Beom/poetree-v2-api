import { Injectable } from '@nestjs/common';
import { CreateTransferCodeDto } from './dto/create-transfer-code.dto';
import { UpdateTransferCodeDto } from './dto/update-transfer-code.dto';

@Injectable()
export class TransferCodesService {
  create(createTransferCodeDto: CreateTransferCodeDto) {
    return 'This action adds a new transferCode';
  }

  findAll() {
    return `This action returns all transferCodes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transferCode`;
  }

  update(id: number, updateTransferCodeDto: UpdateTransferCodeDto) {
    return `This action updates a #${id} transferCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} transferCode`;
  }
}
