import { Injectable } from '@nestjs/common';
import { CreateTransferRequestCodeDto } from './dto/create-transfer-request-code.dto';
import { UpdateTransferRequestCodeDto } from './dto/update-transfer-request-code.dto';

@Injectable()
export class TransferRequestCodesService {
  create(createTransferRequestCodeDto: CreateTransferRequestCodeDto) {
    return 'This action adds a new transferRequestCode';
  }

  findAll() {
    return `This action returns all transferRequestCodes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transferRequestCode`;
  }

  update(
    id: number,
    updateTransferRequestCodeDto: UpdateTransferRequestCodeDto,
  ) {
    return `This action updates a #${id} transferRequestCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} transferRequestCode`;
  }
}
