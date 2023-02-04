import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';



const usersService = new UsersService();
@Injectable()
export class AuthService {
  constructor
  (private usersService: UsersService,
    private jwtService:JwtService ) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user: User = await this.usersService.findUserByName(username);
    const encodePassword = await bcrypt.compare(password, user.password)//comparer password hashe avec celui du user
    if (user && encodePassword) {// remplacer user.password avec le nom de la const de hashage
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log(user);
    const targetUser = await this.usersService.findUserByName(user.username)
    const payload = { username: targetUser.username, sub: targetUser.id };
    return {

      access_token: this.jwtService.sign(payload),
    }

  }
}