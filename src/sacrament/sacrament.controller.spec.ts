import { Test, TestingModule } from '@nestjs/testing';
import { SacramentController } from './sacrament.controller';
import { SacramentService } from './sacrament.service';

describe('SacramentController', () => {
  let controller: SacramentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SacramentController],
      providers: [SacramentService],
    }).compile();

    controller = module.get<SacramentController>(SacramentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
