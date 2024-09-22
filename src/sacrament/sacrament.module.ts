import { Module } from '@nestjs/common';
import { SacramentService } from './sacrament.service';
import { SacramentController } from './sacrament.controller';

@Module({
  controllers: [SacramentController],
  providers: [SacramentService],
})
export class SacramentModule {}
