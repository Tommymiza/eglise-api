import { Test, TestingModule } from '@nestjs/testing';
import { ChristianService } from './christian.service';

describe('ChristianService', () => {
  let service: ChristianService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChristianService],
    }).compile();

    service = module.get<ChristianService>(ChristianService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
