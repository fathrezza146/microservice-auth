import mongoose, { Connection } from "mongoose";
import { authConfig } from "src/config/config";
import { AuthUserSchema } from "src/schema/auth.schema";

export const authProviders = [
    {
      provide: 'USER_MODEL',
      useFactory: (connection: Connection) => connection.model('User', AuthUserSchema),
      inject: ['DATABASE_CONNECTION'],
    }
]

export const databaseProviders = [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: (): Promise<typeof mongoose> =>
        mongoose.connect(`mongodb://localhost:${authConfig.dbhost}/auth_service`),
    },
  ];