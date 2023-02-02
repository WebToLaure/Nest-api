//responsable de la gestion des demandes et du renvoi des réponses au client
import { Controller,Get,Post, Body, Patch, Param, Delete,Header,HttpCode } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Controller('tickets') // préfixe permettant de regrouper les routes de cette entité et d'avoir à éviter de le répéter dans chacune des routes
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.create(createTicketDto);
  }
         // indique à Nest de créer un gestionnaire pour un point de terminaison(endpoint) spécifique pour les requêtes Http.Ici le endpoint corresponf à la requête get et au chemin de la route(route path)
  @Get()// si dans les parenthèses de GET ( nous avions spécifiés un décorateur "customers") cela produirait un mappage GET/tickets/customers
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  findOneBy(@Param('id') id: string) {
    return this.ticketsService.findOneBy(+id);
  }

  /* @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketsService.update(+id, updateTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string)  {
    return this.ticketsService.remove(+id);
  } */
}
