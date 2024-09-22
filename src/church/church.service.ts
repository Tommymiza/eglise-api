import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChurchService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createChurchDto: Prisma.ChurchUncheckedCreateInput) {
    try {
      const church = await this.prisma.church.create({
        data: createChurchDto,
      });
      return church;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.ChurchFindManyArgs) {
    return this.prisma.church.findMany(args);
  }

  async findOne(id: string, args?: Prisma.ChurchFindUniqueArgs) {
    try {
      const church = await this.prisma.church.findUniqueOrThrow({
        where: { id },
        ...args,
      });
      return church;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: string, updateChurchDto: Prisma.ChurchUncheckedUpdateInput) {
    try {
      const church = await this.prisma.church.update({
        where: { id },
        data: updateChurchDto,
      });
      return church;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const church = await this.prisma.church.delete({
        where: { id },
      });
      return church;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
