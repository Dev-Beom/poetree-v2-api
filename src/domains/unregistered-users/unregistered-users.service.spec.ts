import { Test, TestingModule } from '@nestjs/testing';
import { UnregisteredUsersService } from './unregistered-users.service';

describe('UnregisteredUsersService', () => {
  let service: UnregisteredUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnregisteredUsersService],
    }).compile();

    service = module.get<UnregisteredUsersService>(UnregisteredUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
