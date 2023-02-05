import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { encodePassword } from 'src/utils/bcrypt';
import { HttpException } from '@nestjs/common/exceptions';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    if (createUserDto.password !== createUserDto.passwordConfirm) {
      throw new HttpException('non autorisé', HttpStatus.UNAUTHORIZED);
    }
    createUserDto.password = await encodePassword(createUserDto.password)
    return this.usersService.create(createUserDto);
  }

}


