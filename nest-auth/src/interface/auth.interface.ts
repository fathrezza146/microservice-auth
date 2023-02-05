export interface LoginMsg {
    username: string,
    password: string,
}

export interface RegisterMsg {
    username: string,
    password: string,
    email: string,
    fullname: string,
}

export interface LoginResponse {
    token: string,
    expired: string,
    success: boolean,
}

export interface AuthResponse {
    message: string,
}

export interface AuthSchema {
    id: number,
    username: string,
    password: string,
    email: string,
    fullname: string,
}