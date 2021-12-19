import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'testName',
    description: '이름',
    required: true,
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 'test@test.com',
    description: '이메일',
    required: true,
  })
  @IsString()
  readonly email: string;

  @ApiProperty({
    example: 'testPW',
    description: '비밀번호',
    required: true,
  })
  @IsOptional()
  @IsString()
  readonly password: string;

  @ApiProperty({
    example: 'testDescription',
    description: '한 줄 소개',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly description: string;
}
