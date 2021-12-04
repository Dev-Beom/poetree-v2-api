import { PartialType } from '@nestjs/mapped-types';
import { CreateTransferCodeDto } from './create-transfer-code.dto';

export class UpdateTransferCodeDto extends PartialType(CreateTransferCodeDto) {}
