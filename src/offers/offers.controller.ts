import { Controller, Get, Post, Body, Patch, Put, Param, Delete, HttpStatus, UseGuards, Request, ParseIntPipe } from '@nestjs/common';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';


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
    const offer = await this.offersService.findOfferById(id);
    if (!offer) {
      throw new HttpException("l'offre de service n'existe pas", HttpStatus.BAD_REQUEST);
    }
    return offer;
  }


  @UseGuards(JwtAuthGuard)
  @Get('/name/:name')
  async findOfferByName(@Param('name') name: string) {
    const offer = await this.offersService.findOfferByName(name);
    if (!offer) {
      throw new HttpException("Aucune offre trouvée", HttpStatus.NOT_FOUND);
    }
    return offer;
  }


  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateOfferDto: UpdateOfferDto) {
    if (await this.offersService.findOfferById(id)) {
      return await this.offersService.update(id, updateOfferDto);
    }
    throw new HttpException("Offre introuvable", HttpStatus.NOT_FOUND);
  }



  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteOffer(@Param('id', ParseIntPipe) id: number) {
    if (await this.offersService.findOfferById(id)) {
      if (await this.offersService.deleteOffer(id)) {
        throw new HttpException("Offre supprimée", HttpStatus.ACCEPTED);
      }
      throw new HttpException("suppression impossible", HttpStatus.BAD_REQUEST);
    }
    throw new HttpException("Offre introuvable", HttpStatus.NOT_FOUND);
  }
}
