import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { grpcClient } from './grpc-options';

async function bootstrap() {
  try {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, grpcClient);
    await app.listen();
    Logger.log(`Server listening on RPC AuthService`);
  } catch (error) {
    Logger.error(error);
    process.exit(1);
  }
}
bootstrap();
