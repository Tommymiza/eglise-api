import { Module } from '@nestjs/common';
import { ChristianSacramentService } from './christian-sacrament.service';
import { ChristianSacramentController } from './christian-sacrament.controller';

@Module({
  controllers: [ChristianSacramentController],
  providers: [ChristianSacramentService],
})
export class ChristianSacramentModule {}
