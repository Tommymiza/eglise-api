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
import { ChristianService } from './christian.service';
import { CreateChristianDto } from './dto/create-christian.dto';
import { UpdateChristianDto } from './dto/update-christian.dto';

@Controller('christian')
@ApiTags('Christian')
@ApiBearerAuth()
export class ChristianController {
  constructor(
    private readonly christianService: ChristianService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createChristianDto: CreateChristianDto) {
    return this.christianService.create(createChristianDto);
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.christianService.findAll(this.helper.parsePrismaArgs(args));
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.christianService.findOne(id, this.helper.parsePrismaArgs(args));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChristianDto: UpdateChristianDto,
  ) {
    return this.christianService.update(id, updateChristianDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.christianService.remove(id);
  }
}
