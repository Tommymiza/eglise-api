import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SacramentService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createSacramentDto: Prisma.SacramentUncheckedCreateInput) {
    try {
      const sacrament = await this.prisma.sacrament.create({
        data: createSacramentDto,
      });
      return sacrament;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.SacramentFindManyArgs) {
    return this.prisma.sacrament.findMany(args);
  }

  async findOne(id: string, args?: Prisma.SacramentFindUniqueArgs) {
    try {
      const sacrament = await this.prisma.sacrament.findUniqueOrThrow({
        where: { id },
        ...args,
      });
      return sacrament;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: string,
    updateSacramentDto: Prisma.SacramentUncheckedUpdateInput,
  ) {
    try {
      const sacrament = await this.prisma.sacrament.update({
        where: { id },
        data: updateSacramentDto,
      });
      return sacrament;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const sacrament = await this.prisma.sacrament.delete({
        where: { id },
      });
      return sacrament;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
