import { Test, TestingModule } from '@nestjs/testing';
import { TransferCodesService } from './transfer-codes.service';

describe('TransferCodesService', () => {
  let service: TransferCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransferCodesService],
    }).compile();

    service = module.get<TransferCodesService>(TransferCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
