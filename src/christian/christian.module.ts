import { Module } from '@nestjs/common';
import { ChristianService } from './christian.service';
import { ChristianController } from './christian.controller';

@Module({
  controllers: [ChristianController],
  providers: [ChristianService],
})
export class ChristianModule {}
