import { Module } from '@nestjs/common';
import { TransferRequestsService } from './transfer-requests.service';
import { TransferRequestsController } from './transfer-requests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransferRequest } from './entities/transfer-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransferRequest])],
  controllers: [TransferRequestsController],
  providers: [TransferRequestsService],
})
export class TransferRequestsModule {}
