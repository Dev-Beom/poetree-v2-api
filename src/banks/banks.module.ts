import { Module } from '@nestjs/common';
import { BanksService } from './banks.service';
import { BanksController } from './banks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankRepository } from './banks.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BankRepository])],
  controllers: [BanksController],
  providers: [BanksService],
})
export class BanksModule {}
