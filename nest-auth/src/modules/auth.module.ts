import { Module } from '@nestjs/common';
import { AuthController } from 'src/controller/app.controller';
import { AuthService } from 'src/service/app.service';
import { DatabaseModule } from './database.module';
import { authProviders } from './user.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, ...authProviders],
})
export class AuthModule {}

