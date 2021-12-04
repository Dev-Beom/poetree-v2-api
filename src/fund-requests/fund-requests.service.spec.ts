import { Test, TestingModule } from '@nestjs/testing';
import { FundRequestsService } from './fund-requests.service';

describe('FundRequestsService', () => {
  let service: FundRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundRequestsService],
    }).compile();

    service = module.get<FundRequestsService>(FundRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
