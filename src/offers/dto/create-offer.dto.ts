import { IsNotEmpty,IsInt, IsDateString } from "class-validator";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, } from "typeorm";

export class CreateOfferDto {

    @IsNotEmpty() // Décorateur importé de class-validator (comme boolean ou number) 
    name: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    city: string;

    @IsDateString()
    start_time: Date;

    @IsDateString()
    end_time: Date;


}





