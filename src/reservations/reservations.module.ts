import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { OffersService } from 'src/offers/offers.service';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [ReservationsController],
  providers: [ReservationsService, OffersService, UsersService]
})
export class ReservationsModule {}
