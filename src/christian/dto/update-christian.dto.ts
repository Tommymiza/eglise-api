import { PartialType } from '@nestjs/swagger';
import { CreateChristianDto } from './create-christian.dto';

export class UpdateChristianDto extends PartialType(CreateChristianDto) {}
