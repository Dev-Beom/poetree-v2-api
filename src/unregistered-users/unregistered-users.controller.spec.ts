import { Test, TestingModule } from '@nestjs/testing';
import { UnregisteredUsersController } from './unregistered-users.controller';
import { UnregisteredUsersService } from './unregistered-users.service';

describe('UnregisteredUsersController', () => {
  let controller: UnregisteredUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnregisteredUsersController],
      providers: [UnregisteredUsersService],
    }).compile();

    controller = module.get<UnregisteredUsersController>(
      UnregisteredUsersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
