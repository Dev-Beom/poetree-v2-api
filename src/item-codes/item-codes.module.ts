import { Module } from '@nestjs/common';
import { ItemCodesService } from './item-codes.service';
import { ItemCodesController } from './item-codes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemCode } from './entities/item-code.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemCode])],
  controllers: [ItemCodesController],
  providers: [ItemCodesService],
})
export class ItemCodesModule {}
