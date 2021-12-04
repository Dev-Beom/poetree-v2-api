import { Test, TestingModule } from '@nestjs/testing';
import { TransferCodesController } from './transfer-codes.controller';
import { TransferCodesService } from './transfer-codes.service';

describe('TransferCodesController', () => {
  let controller: TransferCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransferCodesController],
      providers: [TransferCodesService],
    }).compile();

    controller = module.get<TransferCodesController>(TransferCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
