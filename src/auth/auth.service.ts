import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Role, User } from '@prisma/client';
import { compareSync } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

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
      if (!isValidPassword) throw new Error('Not a valid password');
      const token = this.jwt.sign({ id: user.id, role: user.role });
      return {
        token,
      };
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
