import { BaseEntity, Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { Offer } from "src/offers/entities/offer.entity";


@Entity()
export class Reservation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.reservations, { onDelete: 'CASCADE'})
    user: User;


    @OneToOne(() => Offer, (offer) => offer.reservation, {nullable:false})
    @JoinColumn()
    offer: Offer;

}
