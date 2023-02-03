import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { encodePassword } from 'src/utils/bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    
    if (createUserDto.password!==createUserDto.passwordConfirm) {
      return "apprends a ecrire"
    }
    createUserDto.password = await encodePassword (createUserDto.password)
    console.log("create",createUserDto);
    return this.usersService.create(createUserDto);
  }


  }
