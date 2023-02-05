import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    async create(createUserDto: CreateUserDto) {

    return await User.create({...createUserDto }).save();
  }

  async findUserByName(username: string) {
    return await User.findOneBy( {username} );

  }

  async findUserById(id: number) {
    return await User.findOneBy( {id} );

  }
}
