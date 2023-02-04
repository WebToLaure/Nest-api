import { timestamp } from "rxjs";
import { Reservation } from "src/reservations/entities/reservation.entity";
import { User } from "src/users/entities/user.entity";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, Timestamp } from "typeorm";


@Entity()
export class Offer extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        type: "decimal",
        precision: 5,
        scale: 2,
        default: 0
    })
    price: number;

    @Column({
        nullable: false
    })
    city: string;


    @Column({
        type: "timestamptz", // timestamp avec time zone UTC
        nullable:false
    })
    start_time: Date;

    @Column({
        type: "timestamptz",
        nullable: false

    })
    end_time: Date;

    @Column({
        default: false
    })
    reserved: boolean

    @ManyToOne(() => User, (user) => user.offers, { onDelete: 'CASCADE', eager: true })
    user: User;

    @OneToOne(() => Reservation, (reservation) => reservation.offer)
    reservation: Reservation;

}
