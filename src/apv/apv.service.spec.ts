import { Test, TestingModule } from '@nestjs/testing';
import { ApvService } from './apv.service';

describe('ApvService', () => {
  let service: ApvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApvService],
    }).compile();

    service = module.get<ApvService>(ApvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
