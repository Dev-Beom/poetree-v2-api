import { Module } from '@nestjs/common';
import { FundsService } from './funds.service';
import { FundsController } from './funds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FundRepository } from './funds.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FundRepository])],
  controllers: [FundsController],
  providers: [FundsService],
})
export class FundsModule {}
