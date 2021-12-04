import { Test, TestingModule } from '@nestjs/testing';
import { ItemCodesController } from './item-codes.controller';
import { ItemCodesService } from './item-codes.service';

describe('ItemCodesController', () => {
  let controller: ItemCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemCodesController],
      providers: [ItemCodesService],
    }).compile();

    controller = module.get<ItemCodesController>(ItemCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
