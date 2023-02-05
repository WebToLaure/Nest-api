import { Injectable } from '@nestjs/common';
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
    return await Offer.find({relations: { user: {reservations: false}}, select: {user: {username: true, password: false}}});
  }

  async findOfferById(id: number) {
    const offer = await Offer.findOneBy({ id })
    if(!offer){
      return undefined;
    }
    return offer;
  }


  async findOfferByName(name: string) {
    const offer = await Offer.findBy({name: Like(`%${name}%`)});
    if (offer.length === 0) {
      return undefined
    }
    return offer
  }

  async update(id: number, updateOfferDto: UpdateOfferDto) {
    const offer = await Offer.findOneBy({ id });
    if (updateOfferDto.name) offer.name = updateOfferDto.name;
    if (updateOfferDto.price) offer.price = updateOfferDto.price;
    if (updateOfferDto.city) offer.city = updateOfferDto.city;
    if (updateOfferDto.start_time) offer.start_time = updateOfferDto.start_time;
    if (updateOfferDto.end_time) offer.end_time = updateOfferDto.end_time;
    return await offer.save()
  }



  async deleteOffer(id: number) {
    return (await Offer.delete({ id })).affected;
  }
}
