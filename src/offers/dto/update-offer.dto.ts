import { PartialType } from '@nestjs/mapped-types';
import { IsDateString, IsNotEmpty } from 'class-validator';
import { CreateOfferDto } from './create-offer.dto';

export class UpdateOfferDto extends PartialType(CreateOfferDto) {

    name: string;

    price: number;

    city: string;

    start_time: Date;

    end_time: Date; 
}
