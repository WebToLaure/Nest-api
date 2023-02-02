import { User } from "src/users/entities/user.entity";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
export class Offer extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: "decimal",
        precision: 5,
        scale: 2,
        default: 0
    })
    price: number;

    @ManyToOne(() => User, (user) => user.offers, {onDelete:'CASCADE'})
    user: User[]



}
