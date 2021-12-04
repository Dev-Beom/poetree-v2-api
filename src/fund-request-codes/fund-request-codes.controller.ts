import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FundRequestCodesService } from './fund-request-codes.service';
import { CreateFundRequestCodeDto } from './dto/create-fund-request-code.dto';
import { UpdateFundRequestCodeDto } from './dto/update-fund-request-code.dto';

@Controller('fund-request-codes')
export class FundRequestCodesController {
  constructor(
    private readonly fundRequestCodesService: FundRequestCodesService,
  ) {}

  @Post()
  create(@Body() createFundRequestCodeDto: CreateFundRequestCodeDto) {
    return this.fundRequestCodesService.create(createFundRequestCodeDto);
  }

  @Get()
  findAll() {
    return this.fundRequestCodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fundRequestCodesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFundRequestCodeDto: UpdateFundRequestCodeDto,
  ) {
    return this.fundRequestCodesService.update(+id, updateFundRequestCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fundRequestCodesService.remove(+id);
  }
}
