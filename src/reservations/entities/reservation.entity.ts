import { BaseEntity, Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { Offer } from "src/offers/entities/offer.entity";


@Entity ()
 export class  Reservation extends BaseEntity{
 
@PrimaryGeneratedColumn()
id : number;

@ManyToOne(() => User, (user) => user.reservations, {onDelete:'CASCADE'})
user: User[]

@OneToOne(() => Offer, (offers => offers.reservation ))
offer:Offer

}