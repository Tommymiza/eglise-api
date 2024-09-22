import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSacramentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
