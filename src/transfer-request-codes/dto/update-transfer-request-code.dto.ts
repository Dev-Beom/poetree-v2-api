import { PartialType } from '@nestjs/mapped-types';
import { CreateTransferRequestCodeDto } from './create-transfer-request-code.dto';

export class UpdateTransferRequestCodeDto extends PartialType(
  CreateTransferRequestCodeDto,
) {}
