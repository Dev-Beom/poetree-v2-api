import { Module } from '@nestjs/common';
import { FundCodesService } from './fund-codes.service';
import { FundCodesController } from './fund-codes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FundCodeRepository } from './fund-codes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FundCodeRepository])],
  controllers: [FundCodesController],
  providers: [FundCodesService],
})
export class FundCodesModule {}
