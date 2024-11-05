import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Role, User } from '@prisma/client';
import { compareSync, hashSync } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { ResetDto } from './dto/reset.dto';

export type UserPayload = {
  id: string;
  email: string;
  role: Role;
};

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async login({ body }: { body: LoginDto }) {
    try {
      const { email, password } = body;
      const user = await this.prisma.user.findUniqueOrThrow({
        where: { email },
      });
      const isValidPassword = compareSync(password, user.password);
      if (!isValidPassword) throw new Error('Mot de passe invalide !');
      const token = this.jwt.sign({ id: user.id, role: user.role });
      return {
        token,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async reset({ user, body }: { user: User; body: ResetDto }) {
    try {
      if (body.password !== body.c_password)
        throw Error("Password doesn't match !");
      const currentUser = await this.prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          password: hashSync(body.password, 10),
        },
      });
      return currentUser;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async me(user: User) {
    try {
      return user;
    } catch (error) {
      throw new ForbiddenException('Access denied!');
    }
  }
}
