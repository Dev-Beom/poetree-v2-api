import { IsOptional, IsString } from 'class-validator';
import { LoginProvider } from 'src/utils/constants';

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
