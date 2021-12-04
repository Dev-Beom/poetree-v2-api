import { Module } from '@nestjs/common';
import { TransferRequestCodesService } from './transfer-request-codes.service';
import { TransferRequestCodesController } from './transfer-request-codes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransferRequestCodeRepository } from './transfer-request-codes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TransferRequestCodeRepository])],
  controllers: [TransferRequestCodesController],
  providers: [TransferRequestCodesService],
})
export class TransferRequestCodesModule {}
