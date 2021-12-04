import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FundCodesService } from './fund-codes.service';
import { CreateFundCodeDto } from './dto/create-fund-code.dto';
import { UpdateFundCodeDto } from './dto/update-fund-code.dto';

@Controller('fund-codes')
export class FundCodesController {
  constructor(private readonly fundCodesService: FundCodesService) {}

  @Post()
  create(@Body() createFundCodeDto: CreateFundCodeDto) {
    return this.fundCodesService.create(createFundCodeDto);
  }

  @Get()
  findAll() {
    return this.fundCodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fundCodesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFundCodeDto: UpdateFundCodeDto) {
    return this.fundCodesService.update(+id, updateFundCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fundCodesService.remove(+id);
  }
}
