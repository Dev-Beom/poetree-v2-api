import { Module } from '@nestjs/common';
import { TransferCodesService } from './transfer-codes.service';
import { TransferCodesController } from './transfer-codes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransferCodeRepository } from './transfer-codes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TransferCodeRepository])],
  controllers: [TransferCodesController],
  providers: [TransferCodesService],
})
export class TransferCodesModule {}
