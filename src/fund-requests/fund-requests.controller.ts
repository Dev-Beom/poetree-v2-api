import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FundRequestsService } from './fund-requests.service';
import { CreateFundRequestDto } from './dto/create-fund-request.dto';
import { UpdateFundRequestDto } from './dto/update-fund-request.dto';

@Controller('fund-requests')
export class FundRequestsController {
  constructor(private readonly fundRequestsService: FundRequestsService) {}

  @Post()
  create(@Body() createFundRequestDto: CreateFundRequestDto) {
    return this.fundRequestsService.create(createFundRequestDto);
  }

  @Get()
  findAll() {
    return this.fundRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fundRequestsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFundRequestDto: UpdateFundRequestDto,
  ) {
    return this.fundRequestsService.update(+id, updateFundRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fundRequestsService.remove(+id);
  }
}
