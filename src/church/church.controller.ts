import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { HelperService } from 'src/helper/helper.service';
import { ChurchService } from './church.service';
import { CreateChurchDto } from './dto/create-church.dto';
import { UpdateChurchDto } from './dto/update-church.dto';

@Controller('church')
@ApiTags('Church')
@ApiBearerAuth()
export class ChurchController {
  constructor(
    private readonly churchService: ChurchService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createChurchDto: CreateChurchDto) {
    return this.churchService.create(createChurchDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.churchService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.churchService.findOne(id, this.helper.parsePrismaArgs(args));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChurchDto: UpdateChurchDto) {
    return this.churchService.update(id, updateChurchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.churchService.remove(id);
  }
}
