import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ApvService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createApvDto: Prisma.ApvUncheckedCreateInput) {
    try {
      const apv = await this.prisma.apv.create({
        data: createApvDto,
      });
      return apv;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.ApvFindManyArgs) {
    return this.prisma.apv.findMany(args);
  }

  async findOne(id: string, args?: Prisma.ApvFindUniqueArgs) {
    try {
      const apv = await this.prisma.apv.findUniqueOrThrow({
        where: { id },
        ...args,
      });
      return apv;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: string, updateApvDto: Prisma.ApvUpdateInput) {
    try {
      const apv = await this.prisma.apv.update({
        where: { id },
        data: updateApvDto,
      });
      return apv;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const apv = await this.prisma.apv.delete({
        where: { id },
      });
      return apv;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
