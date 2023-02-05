<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# PROJET Dépann'tout API
## Development prototype Backend with TypeORM/POSTGRES/Nest.js :

**API REST CRUD DEVELOPMENT:**

```
* npm
* Node.js 
* Express
* PostgreSQL
* Typescript
* TypeORM
* Nest.js
```


**DEPENDENCIES :**
```
* Nest.js
* Typeorm           
* Nodemon   
* Bcrypt.js
* Jsonwebtoken
* Dotenv
* Pg
* Reflect-metadata
* Class-validator
* Class-transformer
* Rxjs
* Passport-jwt
```

**COMMANDS:**
```
  * git init
  * npm init -y
  * npm install express @types/express pg ts-node typeorm typescript
  * npm i -g @nestjs/cli
  * nest new project-name
  * npm install --save @nestjs/typeorm typeorm pg
  * npm i --save @nestjs/confi
  * nest g resource
  * npm i --save class-validator class-transformer
  * npm install --save @nestjs/passport passport passport-local
  * npm install --save-dev @types/passport-local
  * npm install jsonwebtoken
  * npm i bcrypt
  * npm install --save @nestjs/jwt passport-jwt
  * npm install --save-dev @types/passport-jwt
  * 
```

> API dévelopée sur la base de 3 tables: User, Offer,Reservation.

## Contexte de développement: Plateforme de réservations.

  * Proposer un service.
  * Réserver un ou plusieurs services.
  * Rechercher un service par mot clés sur le nom.
  * Authentification gérée à l'aide de JWT.
  
 ``` 
  * USER: INSCRIPTION : 
     * un nom d'utilisateur
     * un email
     * un mot de passe
     * une confirmation de mot de passe
     * son adresse postale
 ```
 ```
  * SERVICE(Offer):INFORMATIONS REQUISES:
     * Le nom de l'utilisateur qui propose le service.
     * Le nom du service proposé.
     * Le tarif proposé.
     * La ville.
     * L'horaire de début et de fin.
   ```
      
      
 ## ROUTES

Plateforme de test développement API utilisée : [Insomnia](https://insomnia.rest/download)  

 * Serveur : http://localhost:3000/



|  Verbe HTTP  |          Endpoint           |           Actions                   |  :warning:GET BY ID:sparkler:     |
|--------------|-----------------------------|-------------------------------------|-----------------------------------|          
|  GET         |     /offers/        (:id)   |    Liste les services               | (Ajouter `:id` pour lister par id)| 
|  GET         |     /reservations/  (:id)   |    Liste les réservations           | (Ajouter `:id` pour lister par id)|
|  GET         |     /offers/name            |    Liste le service par le nom      |                                   |
|--------------|-----------------------------|-------------------------------------|-----------------------------------|
|  POST        |     /users/                 |      Authentification client        |                                   | 
|  POST        |     /users/                 |      Login client                   |                                   |
|  POST        |     /offers/                |      Création service               |                                   |
|  POST        |     /reservations/(:id)     |      Création réservation par id    |                                   |
|              |                             |                                     |                                   |
|--------------|-----------------------------|-------------------------------------|-----------------------------------|
|              |                             |                                     |                                   |
|  PUT         |     /offers/:id             |    Modifie le service par l'id      |                                   |
|              |                             |                                     |                                   |
|              |                             |                                     |                                   |
|--------------|-----------------------------|-------------------------------------|-----------------------------------|
|              |                             |                                     |                                   |
|  DELETE      |     /offers/:id             |    Annule le service  par l'id      |                                   |
|  DELETE      |     /reservations/:id       |    Annule la réservation par l'id   |                                   |
|              |                             |                                     |                                   |
|--------------|-----------------------------|-------------------------------------|-----------------------------------|


##### INSERTION DANS BODY POUR ACCES REQUETE :

```
 REGISTER: 
{
	"username":"",
	"email":"",
	"password":"",
	"passwordConfirm":"",
	"adresse": "",
	"zipCode":"",
	"city":""
}
```
```
LOGIN:
{
	"username":"",
	"password":""
}
```
```
CREATE OFFER:
{
	"name":"",
	"price":number,
	"city":"",
	"start_time":"2023-02-06 08:00:00+01",
	"end_time":"2023-02-06 16:00:00+01"
}
```
```
RESERVATION PAR LE NOM DANS PARAMS
```

