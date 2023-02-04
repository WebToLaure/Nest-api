import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Offer } from './entities/offer.entity';

@Injectable()

export class OffersService {
/** 
     * @method create :
     * * Method avec requête SQL permettant de créer une nouevlle offre de service avec comme paramètre les instances "createOfferDto"
     */

  async createOffer(createOfferDto: CreateOfferDto, user: User) {
    delete user.password;
    return await Offer.create({...createOfferDto,user: user }).save();
  }



  findAllOffers() {
    return `This action returns all offers`;
  }



  findOne(id: number) {
    return `This action returns a #${id} offer`;
  }



  update(id: number, updateOfferDto: UpdateOfferDto) {
    return `This action updates a #${id} offer`;
  }


  Isreserved(id:number, updateOfferDto:UpdateOfferDto){
return `This action removes a #${id}fom offers`;

  }



  deleteOffer(id: number) {
    return `This action delete a #${id} offer`;
  }
}
