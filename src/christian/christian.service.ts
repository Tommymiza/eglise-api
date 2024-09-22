import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChristianService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createChristianDto: Prisma.ChristianUncheckedCreateInput) {
    try {
      const christian = await this.prisma.christian.create({
        data: createChristianDto,
      });
      return christian;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.ChristianFindManyArgs) {
    return this.prisma.christian.findMany(args);
  }

  async findOne(id: string, args?: Prisma.ChristianFindUniqueArgs) {
    try {
      const christian = await this.prisma.christian.findUniqueOrThrow({
        where: { id },
        ...args,
      });
      return christian;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: string,
    updateChristianDto: Prisma.ChristianUncheckedUpdateInput,
  ) {
    try {
      const christian = await this.prisma.christian.update({
        where: { id },
        data: updateChristianDto,
      });
      return christian;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const christian = await this.prisma.christian.delete({
        where: { id },
      });
      return christian;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
