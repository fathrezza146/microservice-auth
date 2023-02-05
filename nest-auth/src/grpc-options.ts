import { GrpcOptions, Transport } from "@nestjs/microservices";
import { addReflectionToGrpcConfig } from "nestjs-grpc-reflection";
import { join } from "path";
import { authConfig } from "./config/config";

export const grpcClient: GrpcOptions = addReflectionToGrpcConfig({
    transport: Transport.GRPC,
    options: {
        url: `localhost:${authConfig.host}`,
        package: 'auth',
        protoPath: join(__dirname, './protos/auth.proto'),
        loader: {
            oneofs: true
        }
    }
})