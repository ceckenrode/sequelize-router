# Sequelize Router

## An easy to use, RESTful route generator designed to work with Sequelize.

## Installation

Available on [npm](https://npmjs.com/package/sequelize-router):

```sh
npm install sequelize-router
```


## Usage

```js
var express = require('express');
// Require the sequelize-router library and any models to be used
var sequelizeRouter = require('sequelize-router');
var db = require('./models');

var app = express();
// Use the sequelize-router middleware as shown below
app.use('/api', sequelizeRouter(db.Inventory)); 
app.use('/api', sequelizeRouter(db.Store));
app.use('/api', sequelizeRouter(db.Transaction));
```

* In the example above, RESTful API routes are being created for the `Inventory`, `Store` and `Transaction` models. Model names are lowercased and used to construct endpoints. Example:

  1. GET `/api/inventory` => Runs a `findAll` query on the inventory table, additionally filterable with optional query parameters. e.g.

    * `/api/inventory?stock%5Blte%5D=50`

    * `/api/inventory?category=home_improvement`

  2. GET `/api/inventory/:id` => Runs a `findOne` query on the inventory table to retrieve the record with the id specified in `req.params.id`. By default, query parameters are ignored.
  
  3. POST `/api/inventory/` => Runs a `create` query on the inventory table, using data passed in req.body to construct the new record.

  4. PUT `/api/inventory/:id` => Runs an `update` query on the inventory table, using data passed in `req.body` to update the record with the `id` specified in `req.params.id`. By default, query parameters are ignored.

  5. DELETE `/api/inventory/:id` => Runs an `destroy` query on the inventory table, using data passed in `req.body` to update the record with the `id` specified in `req.params.id`. By default, query parameters are ignored.

  ## Defaults

  * By default, each endpoint responds with the data retrieved from the Sequelize query, or from the error returned.

  * Defaults are can be easily overridden for any model's methods by passing a configuration object into the `sequelize-router` middleware. Further documentation on this to come.

  ## Authors

  Christian Eckenrode
