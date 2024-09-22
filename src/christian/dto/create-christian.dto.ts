import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Genre } from '@prisma/client';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateChristianDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Genre)
  genre: Genre;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  birthdate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  apv_id: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  surname?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  bateme_name?: string;
}
