// fichier DTO qui définit comment les données seront envoyées ou transmises d'un objet à l'autre sur le réseau

import { IsString, IsBoolean } from "class-validator";

export class CreateTicketDto {

    @IsString() // Décorateur importé de class-validator (comme boolean ou number) 
    readonly name: string;

    @IsString()
    readonly description: string;

    @IsBoolean()
    readonly isAvailable: false;
}
