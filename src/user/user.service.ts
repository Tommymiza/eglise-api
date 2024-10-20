import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { env } from 'node:process';
import { createTransport } from 'nodemailer';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createUserDto: Omit<Prisma.UserUncheckedCreateInput, 'password'>,
  ) {
    try {
      let transporter = createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: env.MAIL_USERNAME,
          pass: env.MAIL_PASSWORD,
        },
      });
      const randomPassword = Math.random().toString(36).slice(-8);
      await transporter.sendMail({
        from: env.MAIL_USERNAME,
        to: createUserDto.email,
        subject: 'Bienvenue sur la plateforme EKAR',
        text: `Votre mot de passe est: ${randomPassword}`,
      });
      const user = await this.prisma.user.create({
        data: {
          ...createUserDto,
          password: hashSync(randomPassword, 10),
        },
      });
      delete user.password;
      return user;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.UserFindManyArgs) {
    return this.prisma.user.findMany(args);
  }

  async findOne(id: string, args?: Prisma.UserFindUniqueArgs) {
    try {
      const user = await this.prisma.user.findUniqueOrThrow({
        where: { id },
        ...args,
      });
      delete user.password;
      return user;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: string, updateUserDto: Prisma.UserUncheckedUpdateInput) {
    try {
      const user = await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });
      delete user.password;
      return user;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const user = await this.prisma.user.delete({
        where: { id },
      });
      delete user.password;
      return user;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
