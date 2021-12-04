import { Test, TestingModule } from '@nestjs/testing';
import { FundRequestCodesService } from './fund-request-codes.service';

describe('FundRequestCodesService', () => {
  let service: FundRequestCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundRequestCodesService],
    }).compile();

    service = module.get<FundRequestCodesService>(FundRequestCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
