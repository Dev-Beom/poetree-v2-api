import { Test, TestingModule } from '@nestjs/testing';
import { FundCodesService } from './fund-codes.service';

describe('FundCodesService', () => {
  let service: FundCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundCodesService],
    }).compile();

    service = module.get<FundCodesService>(FundCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
