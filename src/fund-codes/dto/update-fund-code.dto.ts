import { PartialType } from '@nestjs/mapped-types';
import { CreateFundCodeDto } from './create-fund-code.dto';

export class UpdateFundCodeDto extends PartialType(CreateFundCodeDto) {}
