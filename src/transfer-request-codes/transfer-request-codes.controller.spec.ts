import { Test, TestingModule } from '@nestjs/testing';
import { TransferRequestCodesController } from './transfer-request-codes.controller';
import { TransferRequestCodesService } from './transfer-request-codes.service';

describe('TransferRequestCodesController', () => {
  let controller: TransferRequestCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransferRequestCodesController],
      providers: [TransferRequestCodesService],
    }).compile();

    controller = module.get<TransferRequestCodesController>(
      TransferRequestCodesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
