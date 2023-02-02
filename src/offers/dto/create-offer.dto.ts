import { IsString, IsBoolean, IsDecimal } from "class-validator";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn,  } from "typeorm";

export class CreateOfferDto {

    @IsString() // Décorateur importé de class-validator (comme boolean ou number) 
    readonly name: string;

    @IsDecimal()
    readonly price: number;

    @IsString()
    readonly description: string;

    @IsBoolean()
    readonly isAvailable: false;
}



