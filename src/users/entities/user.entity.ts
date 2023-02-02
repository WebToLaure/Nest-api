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
        nullable: false,
        unique: true
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

    @OneToMany(() => Offer, (offer) => offer.user) // Type:quel type de l'élément associé(Offer), pour chaque "offer"va me chercher la propriété offerer(dans offer)
    offers: Offer[]

    @OneToMany(() => Reservation, (reservation) => reservation.user, { eager: true })
    reservations: Reservation[]
}
