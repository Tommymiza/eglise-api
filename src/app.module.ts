import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './guard/auth.guard';
import { HelperModule } from './helper/helper.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ChurchModule } from './church/church.module';
import { ApvModule } from './apv/apv.module';
import { ChristianModule } from './christian/christian.module';
import { SacramentModule } from './sacrament/sacrament.module';
import { ChristianSacramentModule } from './christian-sacrament/christian-sacrament.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    HelperModule,
    AuthModule,
    UserModule,
    ChurchModule,
    ApvModule,
    ChristianModule,
    SacramentModule,
    ChristianSacramentModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
