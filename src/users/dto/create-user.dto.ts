import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { LoginProvider } from '../../utils/utils';

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

  @IsString()
  readonly loginProvider: LoginProvider;
}
