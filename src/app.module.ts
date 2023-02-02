// fichier de module d'application

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TicketsModule } from './tickets/tickets.module';
import { UsersModule } from './users/users.module';

import { Ticket } from './tickets/entities/ticket.entity';
import { User } from './users/entities/user.entity';

import { TicketsController } from './tickets/tickets.controller';
import { UsersController } from './users/users.controller';
import { TicketsService } from './tickets/tickets.service';
import { UsersService } from './users/users.service';
import { AuthModule } from './auth/auth.module';
import { OffersModule } from './offers/offers.module';
import { ReservationsModule } from './reservations/reservations.module';


@Module({   // les imports servent à communiquer avec la database et les fichiers
  imports: [
    
    ConfigModule.forRoot(),// c'est quoi?
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Ticket],
      synchronize: true,
      logging: false
    }),
    TicketsModule,
    UsersModule,
    AuthModule,
    OffersModule,
    ReservationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { constructor(private datasource: DataSource) { } }


//app.module: module racine du projet