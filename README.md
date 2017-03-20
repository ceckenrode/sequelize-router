# Sequelize Router :sunglasses:

## An easy to use, RESTful route generator designed to work with Sequelize.

[![NPM](https://nodei.co/npm/sequelize-router.png)](https://nodei.co/npm/sequelize-router/)

## Why use Sequelize Router?

* It's tiny (2kb unminified)

* It's easy to use! You can get up and running in about a minute with almost zero configuration.

* It's customizable and extensible. Easily override any of the default route controllers.

## Installation

Available on [npm](https://npmjs.com/package/sequelize-router):

```sh
npm install sequelize-router
```

## Prerequisites

* **sequelize-router** is middleware that runs on top of [sequelize](https://www.npmjs.com/package/sequelize), a popular ORM for node.js applications. Therefore, make sure that you have configured a database prior to use.

* (Optional) Consider using [sequelize-cli](https://github.com/sequelize/cli) to quickly scaffold models of your database to be used for even quicker deployement:
```sh
$ npm install --save-dev sequelize-cli
$ npm install --save sequelize
$ sequelize init:config init:models
```

## Usage

```js
var express = require('express');
// Require the sequelize-router middleware and any models to be used
var sequelizeRouter = require('sequelize-router');
var db = require('./models');

var app = express();
// Use the sequelize-router middleware as shown below
app.use('/api', sequelizeRouter(db.Inventory)); 
app.use('/api', sequelizeRouter(db.Store));
app.use('/api', sequelizeRouter(db.Transaction));
```

### That's literally it. :boom: Restful API Routes are now created for three models.

* In the example above, RESTful API routes are being created for the `Inventory`, `Store` and `Transaction` models. Model names are lowercased and used to construct endpoints.

### API Documentation 

| HTTP method         | URL                                                         | Description                     |
| :-------------:     | -------------------------------------------                 | ------------------------------- |
| **`GET`**           |  `/api/inventory`                                           | Runs a `findAll` query on the inventory table, additionally filterable with optional query parameters. <br> *e.g. `/api/inventory?stock%5Blte%5D=50` **or** `/api/inventory?category=home_improvement` |
| **`POST`**          |  `/api/inventory/`                                          | Runs a `create` query on the inventory table, using data passed in req.body to construct the new record. |
| **`PUT`**           | `/api/inventory/:id`                                        | Runs an `update` query on the inventory table, using data passed in `req.body` to update the record with the `id` specified in `req.params.id`. By default, query parameters are ignored.|
|**`DELETE`**            | `/api/inventory/:id`                                        | Runs an `destroy` query on the inventory table, using data passed in `req.body` to update the record with the `id` specified in `req.params.id`. By default, query parameters are ignored. |

  ## Defaults

  * By default, each endpoint responds with the data retrieved from the Sequelize query, or from the error returned.

  * Defaults are can be easily overridden for any model's methods by passing a configuration object into the `sequelize-router` middleware. Further documentation on this to come.

  ## Authors

  Christian Eckenrode

  ## Contributors
  
  * [Alan Chu](https://github.com/thechutrain)
  
  * [Ray McCann](https://github.com/rmcc3)
