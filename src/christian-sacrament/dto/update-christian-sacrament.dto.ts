import { PartialType } from '@nestjs/swagger';
import { CreateChristianSacramentDto } from './create-christian-sacrament.dto';

export class UpdateChristianSacramentDto extends PartialType(CreateChristianSacramentDto) {}
