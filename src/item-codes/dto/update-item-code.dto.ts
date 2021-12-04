import { PartialType } from '@nestjs/mapped-types';
import { CreateItemCodeDto } from './create-item-code.dto';

export class UpdateItemCodeDto extends PartialType(CreateItemCodeDto) {}
