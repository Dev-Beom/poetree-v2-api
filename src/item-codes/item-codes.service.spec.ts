import { Test, TestingModule } from '@nestjs/testing';
import { ItemCodesService } from './item-codes.service';

describe('ItemCodesService', () => {
  let service: ItemCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemCodesService],
    }).compile();

    service = module.get<ItemCodesService>(ItemCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
