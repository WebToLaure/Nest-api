import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    async create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    
    return await User.create({...createUserDto }).save();
  }

  async findUserBy(username: string) {
    return await User.findOneBy( {username} );

  }

  
}
