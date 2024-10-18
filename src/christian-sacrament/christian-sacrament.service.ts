import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChristianSacramentService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createChristianSacramentDto: Prisma.ChristianSacramentUncheckedCreateInput,
  ) {
    try {
      const christianSacrament = await this.prisma.christianSacrament.create({
        data: createChristianSacramentDto,
      });
      return christianSacrament;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async createMany(
    createChristianSacramentDto: Prisma.ChristianSacramentUncheckedCreateInput[],
  ) {
    try {
      const christianSacraments =
        await this.prisma.christianSacrament.createMany({
          data: createChristianSacramentDto,
        });
      return christianSacraments;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.ChristianSacramentFindManyArgs) {
    return this.prisma.christianSacrament.findMany(args);
  }

  async findOne(id: string, args?: Prisma.ChristianSacramentFindUniqueArgs) {
    try {
      const christianSacrament =
        await this.prisma.christianSacrament.findUniqueOrThrow({
          where: { id },
          ...args,
        });
      return christianSacrament;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: string,
    updateChristianSacramentDto: Prisma.ChristianSacramentUncheckedUpdateInput,
  ) {
    try {
      const christianSacrament = await this.prisma.christianSacrament.update({
        where: { id },
        data: updateChristianSacramentDto,
      });
      return christianSacrament;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const christianSacrament = await this.prisma.christianSacrament.delete({
        where: { id },
      });
      return christianSacrament;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
