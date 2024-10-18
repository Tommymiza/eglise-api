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
import { ChristianSacramentService } from './christian-sacrament.service';
import { CreateChristianSacramentDto } from './dto/create-christian-sacrament.dto';
import { UpdateChristianSacramentDto } from './dto/update-christian-sacrament.dto';

@Controller('christian-sacrament')
@ApiTags('Christian-sacrament')
@ApiBearerAuth()
export class ChristianSacramentController {
  constructor(
    private readonly christianSacramentService: ChristianSacramentService,
    private readonly helper: HelperService,
  ) {}

  @Post()
  create(@Body() createChristianSacramentDto: CreateChristianSacramentDto) {
    return this.christianSacramentService.create(createChristianSacramentDto);
  }

  @Post('many')
  createMany(
    @Body()
    createChristianSacramentDto: {
      data: CreateChristianSacramentDto[];
    },
  ) {
    return this.christianSacramentService.createMany(
      createChristianSacramentDto.data,
    );
  }

  @Get()
  @ApiQuery({ name: 'args', required: false })
  findAll(@Query() { args }: any) {
    return this.christianSacramentService.findAll(
      this.helper.parsePrismaArgs(args),
    );
  }

  @Get(':id')
  @ApiQuery({ name: 'args', required: false })
  findOne(@Param('id') id: string, @Query() { args }: any) {
    return this.christianSacramentService.findOne(
      id,
      this.helper.parsePrismaArgs(args),
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChristianSacramentDto: UpdateChristianSacramentDto,
  ) {
    return this.christianSacramentService.update(
      id,
      updateChristianSacramentDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.christianSacramentService.remove(id);
  }
}
