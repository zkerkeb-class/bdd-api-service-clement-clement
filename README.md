# WEB SERVICE (Ynov) - Service dédié aux opérations en base de données

## Description du Service

**Objectif** : Concevoir un service pour gérer toutes les interactions avec la base de données, y compris les requêtes, les mises à jour et la maintenance.

**Fonctionnalités clés** :

- Abstraction et gestion des requêtes de base de données.
- Mise en œuvre des pratiques de sécurité pour l'accès aux données.
- Optimisation des performances des requêtes.

> Servira a l’inscription des utilisateurs, et tout autres operation devant êtres stocké dans la bdd

## Project members

- Clément DUFOUR-LAMARTINIE
- Clément WALSH DE SERRANT

## Installation and configuration

Run `npm install`

Create `.env` file

.env configuration :

 <pre>
PORT=3001

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
DB_PORT=3306

JWT_SECRET=
 </pre>

## Run project

Run `npm run dev`
