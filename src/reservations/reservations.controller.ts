import { Controller, Get, Post, Request, Body, Patch, Param, Delete, HttpException, HttpStatus, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { OffersService } from 'src/offers/offers.service';
import { UsersService } from 'src/users/users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('reservations')
export class ReservationsController {
  constructor(
    private readonly reservationsService: ReservationsService,
    private readonly offersService: OffersService,
    private readonly usersService: UsersService
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post(':id')
  async create(@Param('id', ParseIntPipe) id: number, @Request() req) {
    const offer = await this.offersService.findOfferById(id);
    if (!offer) {
      throw new HttpException("l'offre de service n'existe pas", HttpStatus.NOT_FOUND);
    }
    if (offer.reserved) {
      throw new HttpException("l'offre est deja reservée", HttpStatus.FORBIDDEN);
    }
    const user = await this.usersService.findUserById(req.user.userId);
    return this.reservationsService.create(user, offer);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reservationsService.findOne(id);
  }


  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteReservation(@Param('id', ParseIntPipe) id: number) {
    const resa = await this.reservationsService.findOne(id)
    if (resa.length === 0) {
      throw new HttpException("reservation introuvable", HttpStatus.NOT_FOUND);
    }
    resa[0].offer.reserved = false;
    await resa[0].offer.save();
    if (await this.reservationsService.deleteReservation(id)) {
      throw new HttpException("reservation supprimée", HttpStatus.ACCEPTED);
    }
    throw new HttpException("suppression impossible", HttpStatus.BAD_REQUEST);
  }

}
