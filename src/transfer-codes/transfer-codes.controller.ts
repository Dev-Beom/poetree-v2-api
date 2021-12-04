import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransferCodesService } from './transfer-codes.service';
import { CreateTransferCodeDto } from './dto/create-transfer-code.dto';
import { UpdateTransferCodeDto } from './dto/update-transfer-code.dto';

@Controller('transfer-codes')
export class TransferCodesController {
  constructor(private readonly transferCodesService: TransferCodesService) {}

  @Post()
  create(@Body() createTransferCodeDto: CreateTransferCodeDto) {
    return this.transferCodesService.create(createTransferCodeDto);
  }

  @Get()
  findAll() {
    return this.transferCodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transferCodesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransferCodeDto: UpdateTransferCodeDto,
  ) {
    return this.transferCodesService.update(+id, updateTransferCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transferCodesService.remove(+id);
  }
}
