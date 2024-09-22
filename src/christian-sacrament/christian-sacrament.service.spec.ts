import { Test, TestingModule } from '@nestjs/testing';
import { ChristianSacramentService } from './christian-sacrament.service';

describe('ChristianSacramentService', () => {
  let service: ChristianSacramentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChristianSacramentService],
    }).compile();

    service = module.get<ChristianSacramentService>(ChristianSacramentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
