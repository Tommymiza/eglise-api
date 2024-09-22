import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Role } from '@prisma/client';
import { IS_PUBLIC_KEY } from 'src/decorator/public.decorator';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private logger = new Logger();

  constructor(
    private reflector: Reflector,
    private jwt: JwtService,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.get(IS_PUBLIC_KEY, context.getHandler());
    if (isPublic) {
      return true;
    }
    const req = context.switchToHttp().getRequest();
    try {
      const token = req.headers['authorization']?.split(' ')[1];
      if (!token) return false;
      const payload: { id: string; role: Role } = this.jwt.decode(token);
      const user = await this.prisma.user.findUniqueOrThrow({
        where: { id: payload.id },
      });
      req.jwtToken = token;
      delete user.password;
      req.user = user;
      return true;
    } catch (error) {
      this.logger.error(error, AuthGuard.name);
    }
    return false;
  }
}
