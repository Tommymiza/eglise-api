import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateChristianSacramentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  christian_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  sacrament_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  church_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  createdAt: Date;
}
