import { Module } from '@nestjs/common';
import { FundRequestCodesService } from './fund-request-codes.service';
import { FundRequestCodesController } from './fund-request-codes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FundRequestCodeRepository } from './fund-request-codes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FundRequestCodeRepository])],
  controllers: [FundRequestCodesController],
  providers: [FundRequestCodesService],
})
export class FundRequestCodesModule {}
