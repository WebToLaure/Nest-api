import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { UsersService } from 'src/users/users.service';
import { OffersService } from 'src/offers/offers.service';

@Module({
  controllers: [ReservationsController],
  providers: [ReservationsService,UsersService,OffersService]
})
export class ReservationsModule {}
