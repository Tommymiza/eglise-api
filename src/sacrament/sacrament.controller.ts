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
import { CreateSacramentDto } from './dto/create-sacrament.dto';
import { UpdateSacramentDto } from './dto/update-sacrament.dto';
import { SacramentService } from './sacrament.service';

@Controller('sacrament')
@ApiTags('Sacrament')
@ApiBearerAuth()
export class SacramentController {
  constructor(
    private readonly sacramentService: SacramentService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createSacramentDto: CreateSacramentDto) {
    return this.sacramentService.create(createSacramentDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.sacramentService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.sacramentService.findOne(id, this.helper.parsePrismaArgs(args));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSacramentDto: UpdateSacramentDto,
  ) {
    return this.sacramentService.update(id, updateSacramentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sacramentService.remove(id);
  }
}
