import { IsNotEmpty, isNotEmpty } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  startsAt: Date;

  @IsNotEmpty()
  targetPrice: number;

  @IsNotEmpty()
  categoryId: number;

  @IsNotEmpty()
  imageURL: string;
}
