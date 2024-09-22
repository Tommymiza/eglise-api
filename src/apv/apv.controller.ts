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
import { ApvService } from './apv.service';
import { CreateApvDto } from './dto/create-apv.dto';
import { UpdateApvDto } from './dto/update-apv.dto';

@Controller('apv')
@ApiTags('Apv')
@ApiBearerAuth()
export class ApvController {
  constructor(
    private readonly apvService: ApvService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createApvDto: CreateApvDto) {
    return this.apvService.create(createApvDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.apvService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.apvService.findOne(id, this.helper.parsePrismaArgs(args));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApvDto: UpdateApvDto) {
    return this.apvService.update(id, updateApvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apvService.remove(id);
  }
}
