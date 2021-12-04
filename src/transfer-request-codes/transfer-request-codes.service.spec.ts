import { Test, TestingModule } from '@nestjs/testing';
import { TransferRequestCodesService } from './transfer-request-codes.service';

describe('TransferRequestCodesService', () => {
  let service: TransferRequestCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransferRequestCodesService],
    }).compile();

    service = module.get<TransferRequestCodesService>(
      TransferRequestCodesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
