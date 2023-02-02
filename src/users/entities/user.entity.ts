import { Offer } from "src/offers/entities/offer.entity";
import { Reservation } from "src/reservations/entities/reservation.entity";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50,
        nullable: false,
        unique: true
    })
    username: string;

    @Column({
        nullable: false
    })
    email: string;

    @Column({
        nullable: false
    })
    password: string;

    @Column({
        nullable: false
    })
    adresse_line1: string;

    @Column()
    adresse_line2: string;

    @Column()
    adresse_line3: string;

    @Column({
        nullable: false
    })
    zipCode: string
    
    @Column({
        nullable: false
    })
    city: string

    @OneToMany(() => Offer, offer => offer.offerer) // offerer: celui qui propose l'offre
    offers: Offer[]

    @OneToMany(() => Reservation, reservations => reservations.user)
    reservations: Reservation[]
}
