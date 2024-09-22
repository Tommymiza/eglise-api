import { PartialType } from '@nestjs/swagger';
import { CreateApvDto } from './create-apv.dto';

export class UpdateApvDto extends PartialType(CreateApvDto) {}
