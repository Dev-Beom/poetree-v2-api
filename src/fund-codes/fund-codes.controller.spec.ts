import { Test, TestingModule } from '@nestjs/testing';
import { FundCodesController } from './fund-codes.controller';
import { FundCodesService } from './fund-codes.service';

describe('FundCodesController', () => {
  let controller: FundCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundCodesController],
      providers: [FundCodesService],
    }).compile();

    controller = module.get<FundCodesController>(FundCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
