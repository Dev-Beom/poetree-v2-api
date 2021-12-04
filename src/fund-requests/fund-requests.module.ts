import { Module } from '@nestjs/common';
import { FundRequestsService } from './fund-requests.service';
import { FundRequestsController } from './fund-requests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FundRequestRepository } from './fund-requests.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FundRequestRepository])],
  controllers: [FundRequestsController],
  providers: [FundRequestsService],
})
export class FundRequestsModule {}
