import { Test, TestingModule } from '@nestjs/testing';
import { PostHashtagsController } from './post-hashtags.controller';

describe('PostHashtagsController', () => {
  let controller: PostHashtagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostHashtagsController],
    }).compile();

    controller = module.get<PostHashtagsController>(PostHashtagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
