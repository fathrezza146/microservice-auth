import { Module } from '@nestjs/common';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { grpcClient } from './grpc-options';
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [AuthModule, GrpcReflectionModule.register(grpcClient)],
})
export class AppModule {}
