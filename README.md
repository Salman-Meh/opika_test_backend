## Description

The purpose of this app is to fulfill the requirements of Question 2 of Opika full stack developer test

## Prerequisites

Create a .env file based on .env.template

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

```bash
$ npm i
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
