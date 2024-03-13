## Description

The purpose of this app is to fulfill the requirements of Question 2 of Opika full stack developer test

## Prerequisites

Create a .env file based on .env.template and enter the values.

Node version: 16.14.2

```bash
# check node version
$ node --version
```

Redis should be up and running

```bash
# check redis status
$ redis-cli PING
```

Mongo DB should be connected

```bash
# check mongo db status
$ pgrep mongo
```

## Installation

Install node packages

```bash
$ npm i
```

## Running database migrations

There is a migration written to add some default data into the mongo DB. To run it, use the following command.

```bash
$ npm run migrate:up
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

The application will start running on default port: 3000. You can check the status of the application with the following health check URL.

http://localhost:3000/api/health

## Testing the app

To test the application, import this cURL in postman. Replace {{id}} with an \_id created in your mongo DB after running the migrations for default users.

```bash
$ curl --location 'http://localhost:3000/api/users/{{id}}'
```

## Library Description

- @nestjs/common
  Used for common nest js function and decorators like module, controller, logger etc.

- @nestjs/core
  Used for core nest js modules.

- @nestjs/mongoose
  Used for integrating mongo DB into the nest js application by providing injection.

- ioredis
  Used to connect to redis and perform read write operations.

- mongodb
  Used as a database management system to connect to mongo DB.

- mongoose
  Used as an ODM library to interact with the mongo DB.
