import { Controller, Get, Post,Request, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { OffersService } from 'src/offers/offers.service';
import { UsersService } from 'src/users/users.service';

@Controller('reservations')
export class ReservationsController {
  constructor(
    private readonly reservationsService: ReservationsService,
    private readonly offersService: OffersService,
    private readonly usersService: UsersService
    ) {}

  @Post()
  async create(@Param() offerId: number, @Request() req) {
    const offer = await this.offersService.findOfferById(offerId);
    if(!offer){
      throw new HttpException("l'offre de service n'existe pas", HttpStatus.NOT_FOUND);
    }
    const user = await this.usersService.findUserById(req.user.userId);
    return this.reservationsService.create(user, offer);
  }

  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
    return this.reservationsService.update(+id, updateReservationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationsService.remove(+id);
  }
}
