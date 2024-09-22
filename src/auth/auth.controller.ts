import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorator/public.decorator';
import { User } from 'src/decorator/user.decorator';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  register(@Body() body: LoginDto) {
    return this.authService.login({ body });
  }

  @Get('me')
  @ApiBearerAuth()
  me(@User() user) {
    return this.authService.me(user);
  }
}
