import { PartialType } from '@nestjs/mapped-types';
import { CreateFundRequestCodeDto } from './create-fund-request-code.dto';

export class UpdateFundRequestCodeDto extends PartialType(
  CreateFundRequestCodeDto,
) {}
