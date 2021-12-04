import { Module } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { TransfersController } from './transfers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransferRepository } from './transfers.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TransferRepository])],
  controllers: [TransfersController],
  providers: [TransfersService],
})
export class TransfersModule {}
