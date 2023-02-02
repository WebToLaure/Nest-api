import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController, UsersService],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {
}
