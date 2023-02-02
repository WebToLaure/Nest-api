import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() { // fonction asynchrone qui démarre notre application
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({

    whitelist: true,
    forbidNonWhitelisted: true,

  }));


  await app.listen(3000);// demarre notre écouteur HTTP ce qui permet d'attendre les requêtes HTTP
}
bootstrap();


//Le fichier d'entrée de l'application qui utilise la fonction principale NestFactory pour créer une instance d'application Nest.npm 