import { Schema } from "mongoose";

export const AuthUserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    fullname: String,
})