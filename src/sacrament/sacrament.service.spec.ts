import { Test, TestingModule } from '@nestjs/testing';
import { SacramentService } from './sacrament.service';

describe('SacramentService', () => {
  let service: SacramentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SacramentService],
    }).compile();

    service = module.get<SacramentService>(SacramentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
