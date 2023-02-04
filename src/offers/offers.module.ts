import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [OffersController],
  providers: [OffersService,UsersService],
})
export class OffersModule {}
