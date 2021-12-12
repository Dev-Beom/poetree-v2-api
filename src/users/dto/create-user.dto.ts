import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly password: string;

  @IsOptional()
  @IsString()
  readonly description: string;
}
