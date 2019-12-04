require("./bootstrap")
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const databaseConfig = require('./config/database')

class App {
  constructor() {
    this.server = express()

    this.middlewares()
    this.database();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server
