import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransferRequestCodesService } from './transfer-request-codes.service';
import { CreateTransferRequestCodeDto } from './dto/create-transfer-request-code.dto';
import { UpdateTransferRequestCodeDto } from './dto/update-transfer-request-code.dto';

@Controller('transfer-request-codes')
export class TransferRequestCodesController {
  constructor(
    private readonly transferRequestCodesService: TransferRequestCodesService,
  ) {}

  @Post()
  create(@Body() createTransferRequestCodeDto: CreateTransferRequestCodeDto) {
    return this.transferRequestCodesService.create(
      createTransferRequestCodeDto,
    );
  }

  @Get()
  findAll() {
    return this.transferRequestCodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transferRequestCodesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransferRequestCodeDto: UpdateTransferRequestCodeDto,
  ) {
    return this.transferRequestCodesService.update(
      +id,
      updateTransferRequestCodeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transferRequestCodesService.remove(+id);
  }
}
