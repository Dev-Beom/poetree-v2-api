import { PartialType } from '@nestjs/mapped-types';
import { CreateUnregisteredUserDto } from './create-unregistered-user.dto';

export class UpdateUnregisteredUserDto extends PartialType(
  CreateUnregisteredUserDto,
) {}
