import { Injectable } from '@nestjs/common';
import { userInfo } from 'os';
import { User } from 'src/users/entities/user.entity';
import { Like } from 'typeorm';
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
    delete user.reservations;
    return await Offer.create({ ...createOfferDto, user: user }).save();
  }


  async findAllOffers(): Promise<Offer[]> {
    return await Offer.find();
  }

  async findOfferById(id: number) {
    return await Offer.findOneBy({ id });
  }


  async findOfferByName(name: string) {
    return await Offer.findBy({name: Like(`%${name}%`)});
  }

 /*  async update(id: number, updateOfferDto: UpdateOfferDto) {
    return await Offer.create({ id, ...updateOfferDto}).save();
  }  */



  async deleteOffer(id: number) {
    return await Offer.delete({ id });
  }
}
