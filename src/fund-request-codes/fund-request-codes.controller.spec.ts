import { Test, TestingModule } from '@nestjs/testing';
import { FundRequestCodesController } from './fund-request-codes.controller';
import { FundRequestCodesService } from './fund-request-codes.service';

describe('FundRequestCodesController', () => {
  let controller: FundRequestCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundRequestCodesController],
      providers: [FundRequestCodesService],
    }).compile();

    controller = module.get<FundRequestCodesController>(
      FundRequestCodesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
