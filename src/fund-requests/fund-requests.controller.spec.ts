import { Test, TestingModule } from '@nestjs/testing';
import { FundRequestsController } from './fund-requests.controller';
import { FundRequestsService } from './fund-requests.service';

describe('FundRequestsController', () => {
  let controller: FundRequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundRequestsController],
      providers: [FundRequestsService],
    }).compile();

    controller = module.get<FundRequestsController>(FundRequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
