// fichier pour créer le schéma de notre base de données(comment les données seront représentées dans notre base de données).
//fichier permet aussi de vérifier les types

import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity('tickets')
export class Ticket extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50
    })
    name: string;

    @Column('text')
    description: string;

    @Column()
    isAvailable: boolean;
    
    @Column()
    city: string;

    @Column()
    price: number;










}
