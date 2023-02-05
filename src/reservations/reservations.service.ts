import { Injectable } from '@nestjs/common';
import { Offer } from 'src/offers/entities/offer.entity';
import { User } from 'src/users/entities/user.entity';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationsService {
  async create(user: User, offer: Offer) {
    offer.reserved = true;
    offer.save();
  return await Reservation.create({ user: user, offer: offer }).save();
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  async deleteReservation(id: number) {
    return await Reservation.delete({ id });
  }
}
