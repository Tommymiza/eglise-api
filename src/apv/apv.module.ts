import { Module } from '@nestjs/common';
import { ApvService } from './apv.service';
import { ApvController } from './apv.controller';

@Module({
  controllers: [ApvController],
  providers: [ApvService],
})
export class ApvModule {}
