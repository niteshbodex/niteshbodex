const { Pool, Client } = require("pg");
var config = require("../config/config.json");

const db_connect = new Pool({
  user: config.database.postgres.username,
  host: config.database.postgres.host,
  database: config.database.postgres.database,
  password: config.database.postgres.password,
  port: config.database.postgres.port,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
});

module.exports = db_connect;
