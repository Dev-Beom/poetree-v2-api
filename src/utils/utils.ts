import * as bcrypt from 'bcryptjs';
import { BadRequestException } from '@nestjs/common';

export enum LoginProvider {
  local = 'LOCAL',
  kakao = 'KAKAO',
  google = 'GOOGLE',
}

export const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, 8);
};

export const checkPassword = (
  unencryptedPassword: string,
  password: string,
) => {
  if (!bcrypt.compareSync(unencryptedPassword, password)) {
    throw new BadRequestException('Invalid ID or Password');
  }
  return true;
};
