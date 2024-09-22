import { Test, TestingModule } from '@nestjs/testing';
import { ChristianController } from './christian.controller';
import { ChristianService } from './christian.service';

describe('ChristianController', () => {
  let controller: ChristianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChristianController],
      providers: [ChristianService],
    }).compile();

    controller = module.get<ChristianController>(ChristianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
