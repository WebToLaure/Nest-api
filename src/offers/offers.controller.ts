import { Controller, Get, Post, Body, Patch,Put, Param, Delete, HttpStatus, UseGuards, Request } from '@nestjs/common';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { HttpException } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Controller('offers')
export class OffersController {
  constructor(
    private readonly offersService: OffersService,
    private readonly usersService: UsersService
    ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createOffer(@Body() createOfferDto: CreateOfferDto,@Request() req) { // etre loggué pour créer une offer... pas fait
    const user = await this.usersService.findUserById(req.user.userId);
    
    
    return this.offersService.createOffer(createOfferDto, user);
  }


  @Get('AllOffers')
  findAllOffers() {
    return this.offersService.findAllOffers();
  }//fait




  @Get(':id')
  findByName(@Param('id') id: string) {
    return this.offersService.findOne(+id);
  }

  

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateOfferDto: UpdateOfferDto) {

    if(!id){

    throw new HttpException ("l'offre de service n'existe pas", HttpStatus.BAD_REQUEST);
  }
    return this.offersService.update(+id, updateOfferDto);
  }// fait



  @Put('reserved/:id')
  Isreserved(@Param('id') id: number, @Body() updateOfferDto: UpdateOfferDto) {

    return this.offersService.Isreserved(+id, updateOfferDto);
  }



  @Delete(':id')
  deleteOffer(@Param('id') params:{id: number}) {
    return this.offersService.deleteOffer(params.id);
  }
}
