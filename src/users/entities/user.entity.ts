import { Offer } from "src/offers/entities/offer.entity";
import { Reservation } from "src/reservations/entities/reservation.entity";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50
    })
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    adresse_line1: string;

    @Column()
    adresse_line2: string;

    @Column()
    adresse_line3: string;
    @Column()
    zipCode: string
    @Column()

    city: string


    @Column()
    isAdmin: boolean;

    @OneToMany(() => Offer, offer => offer.user)
    offers: Offer[]

    @OneToMany(() => Reservation, reservations => reservations.user)
    reservations: Reservation[]
}
