import { Test, TestingModule } from '@nestjs/testing';
import { ChristianSacramentController } from './christian-sacrament.controller';
import { ChristianSacramentService } from './christian-sacrament.service';

describe('ChristianSacramentController', () => {
  let controller: ChristianSacramentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChristianSacramentController],
      providers: [ChristianSacramentService],
    }).compile();

    controller = module.get<ChristianSacramentController>(ChristianSacramentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
