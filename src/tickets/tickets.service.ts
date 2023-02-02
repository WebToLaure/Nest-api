// fichier responsable de l'interaction et de la communication avec la BDR. Utilsé pour CRUD les enregistrements de l'entity tickets.

import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';


@Injectable()
export class TicketsService {

  async create(createTicketDto: CreateTicketDto) {

    return await Ticket.create ({...createTicketDto}).save() ;
  }

  async findAll() {
    return await Ticket.find();
  }

  async findOneBy(id: number) {
    return await Ticket.findOneBy({id});
  }

 /*  async update(id: number, updateTicketDto: UpdateTicketDto) {
    return await Ticket.update (${+id...updateTicketDto}).save();
  }

  async remove(id: number) {

    return await Ticket.delete({id}) ;
  } */
}
