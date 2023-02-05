import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthResponse, LoginMsg, LoginResponse, RegisterMsg } from 'src/interface/auth.interface';
import { AuthService } from 'src/service/app.service';

@Controller()
export class AuthController{
  constructor(
    private readonly authService: AuthService,
  ) {}

  @GrpcMethod('AuthService', 'Register')
  async register(data: RegisterMsg): Promise<AuthResponse> {
    try {
      Logger.debug("called")
      await this.authService.registerUser(data)
      Logger.debug("called")
      return {
        message: "Register Success!"
      }
    } catch (error) {
      Logger.error(error)
      return {
        message: "Register Failed!"
      }
    }

  }

  @GrpcMethod('AuthService', 'Login')
  async login(data: LoginMsg): Promise<LoginResponse> {
    try {
      const response = await this.authService.login(data.username, data.password)

      return response
    } catch (error) {
      Logger.error(error)
      return {
        success: false,
        expired: new Date().toISOString(),
        token: "",
      }
    }
  }
}
