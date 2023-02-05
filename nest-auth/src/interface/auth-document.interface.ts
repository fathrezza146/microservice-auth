import { Document } from "mongoose";

export interface AuthDoc extends Document {
    readonly username: string,
    readonly password: string,
    readonly email: string,
    readonly fullname: Date,
}