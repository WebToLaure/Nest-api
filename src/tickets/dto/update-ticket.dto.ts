import { PartialType } from '@nestjs/mapped-types'; // nous permet d'éviter les codes redondants avec importation notamment de PartialType
import { CreateTicketDto } from './create-ticket.dto';

export class UpdateTicketDto extends PartialType (CreateTicketDto) {}// nous retourne les types que nous avons choisi dans create-ticket


