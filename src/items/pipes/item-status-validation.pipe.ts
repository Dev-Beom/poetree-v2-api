import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ItemStatus } from '../item-status.enum';

export class ItemStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [
    ItemStatus.REGISTERED,
    ItemStatus.REVIEW,
    ItemStatus.PROCEEDING,
    ItemStatus.SUCCESS,
    ItemStatus.FAILURE,
  ];

  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
