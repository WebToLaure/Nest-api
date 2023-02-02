import { Reservation } from "src/reservations/entities/reservation.entity";
import { User } from "src/users/entities/user.entity";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, Timestamp } from "typeorm";


@Entity()
export class Offer extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable:false
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
        nullable:false
    })
    city: string;

    @Column({
        nullable:false
    })
    start_time: Timestamp;
    @Column({
        nullable:false
    })
    end_time: Timestamp;

    @Column({
        default:false
    })
    reserved: boolean

    @ManyToOne(() => User, (user) => user.offers, { onDelete: 'CASCADE' })
    offerer: User[]

    @OneToOne(() => Reservation, (reservations => reservations.offer))
    reservation : Reservation

}
