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

  async findOne(id: number) {
    const reservation = await Reservation.findOneBy({ id })
    if (!reservation) {
      return undefined;
    }
    return reservation;
  }

  async deleteReservation(id: number) {
    return (await Reservation.delete({ id })).affected;
  }
}
