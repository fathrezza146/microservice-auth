import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { AuthDoc } from 'src/interface/auth-document.interface';
import { LoginResponse, RegisterMsg } from 'src/interface/auth.interface';
import { hashSync, compareSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';


const saltRounds = 10;

@Injectable()
export class AuthService {
  constructor(@Inject('USER_MODEL')private readonly authUser: Model<AuthDoc>){}
  async registerUser(user: RegisterMsg): Promise<boolean> {
    const checkUser = await this.authUser.findOne({username: user.username}).exec()
    if (checkUser._id != "") {
      throw new Error("Registration Failed")
    }

    user.password = hashSync(user.password, saltRounds)
    try {
      const a = await this.authUser.create(user as any)
      Logger.error(a)

    } catch (error) {
      Logger.error(error)
    }


    return true
  }

  async login(username: string, password: string): Promise<LoginResponse>{
    const checkUser = await this.authUser.findOne({username: username}).exec()
    if (!checkUser) {
      throw new Error("Wrong User/ Password")
    }

    const checkPassword = compareSync(password, checkUser.password)
    if (!checkPassword) {
      throw new Error("Wrong User/ Password")
    }

    const payload = {
      id: checkUser._id,
      username: checkUser.password,
      email: checkUser.email,
    }

    const expired = new Date()
    expired.setDate(expired.getDate() + 7);
    const token = sign(payload, "v3rys3cr3t", {expiresIn: '7d'})

    return {
      success: true,
      token,
      expired: expired.toISOString(),
    }
  }
}
