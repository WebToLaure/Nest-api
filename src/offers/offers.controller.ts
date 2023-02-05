import { Controller, Get, Post, Body, Patch, Put, Param, Delete, HttpStatus, UseGuards, Request, ParseIntPipe } from '@nestjs/common';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { HttpException } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { Offer } from './entities/offer.entity';

@Controller('offers')
export class OffersController {
  constructor(
    private readonly offersService: OffersService,
    private readonly usersService: UsersService
  ) { }


  @UseGuards(JwtAuthGuard)
  @Post()
  async createOffer(@Body() createOfferDto: CreateOfferDto, @Request() req) {
    const user = await this.usersService.findUserById(req.user.userId);
    return this.offersService.createOffer(createOfferDto, user);
  }


  @UseGuards(JwtAuthGuard)
  @Get()
  async findAllOffers() {
    return await this.offersService.findAllOffers();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOfferById(@Param('id', ParseIntPipe) id: number) {
    return await this.offersService.findOfferById(id);
  }


  @UseGuards(JwtAuthGuard)
  @Get('/name/:name')
  async findOfferByName(@Param('name') name:string){
    return await this.offersService.findOfferByName(name);
  }


/* @UseGuards(JwtAuthGuard)
@Patch(':id')
async update(@Param('id', ParseIntPipe) id: number, @Body() updateOfferDto: UpdateOfferDto) {
  if (!id) {
  throw new HttpException("l'offre de service n'existe pas", HttpStatus.BAD_REQUEST);
  }
  return await this.offersService.update(+id, updateOfferDto);
} */
  


  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteOffer(@Param('id', ParseIntPipe) id: number) {
    return await this.offersService.deleteOffer(id);
  }
}
