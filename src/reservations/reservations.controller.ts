import { Controller, Get, Post, Body, Patch, Param, Request, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) { }


  @UseGuards(JwtAuthGuard)
  @Post()
  async createReservation(@Body() createReservationDto: CreateReservationDto) {

    return this.reservationsService.createReservation(createReservationDto);
  }



/* 
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
  } */


  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteReservation(@Param('id', ParseIntPipe) id: number) {
    return await this.reservationsService.deleteReservation(id);
  }
}
