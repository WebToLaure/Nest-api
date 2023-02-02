import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "src/users/entities/user.entity";
export class Reservation extends BaseEntity{

@PrimaryGeneratedColumn()
id : number;

@ManyToOne(() => User, (user) => user.reservations, {onDelete:'CASCADE'})
user: User[]


}
