import { IsNotEmpty,IsDateString } from "class-validator";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, } from "typeorm";

export class CreateOfferDto {

    @IsNotEmpty() // Décorateur importé de class-validator (comme boolean ou number) 
    readonly name: string;

    @IsNotEmpty()
    readonly price: number;

    @IsNotEmpty()
    city: string;

    @IsDateString()
    readonly start_time: Date;

    @IsDateString()
    readonly end_time: Date;


}



