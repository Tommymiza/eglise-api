import { Test, TestingModule } from '@nestjs/testing';
import { ApvController } from './apv.controller';
import { ApvService } from './apv.service';

describe('ApvController', () => {
  let controller: ApvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApvController],
      providers: [ApvService],
    }).compile();

    controller = module.get<ApvController>(ApvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
