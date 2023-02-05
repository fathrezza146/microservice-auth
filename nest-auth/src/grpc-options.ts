import { GrpcOptions, Transport } from "@nestjs/microservices";
import { addReflectionToGrpcConfig } from "nestjs-grpc-reflection";
import { join } from "path";

export const grpcClient: GrpcOptions = addReflectionToGrpcConfig({
    transport: Transport.GRPC,
    options: {
        url: 'localhost:9051',
        package: 'auth',
        protoPath: join(__dirname, './protos/auth.proto'),
        loader: {
            oneofs: true
        }
    }
})