import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bank } from 'src/entities/banks.entity';
import { BanksController } from './banks.controller';
import { BankRepository } from './banks.repository';
import { BanksService } from './banks.service';

@Module({
  imports: [TypeOrmModule.forFeature([BankRepository])],
  controllers: [BanksController],
  providers: [BanksService],
})
export class BanksModule {}
