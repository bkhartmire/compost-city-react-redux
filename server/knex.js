const knex = require("knex");
require("dotenv").config();

const l = {
  user: process.env.DB_USER || "postgres",
  port: process.env.DB_PORT || 5432,
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "compostcity",
  host: process.env.DB_HOST || "localhost"
};
const db = knex({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${l.user}:${l.password}@${l.host}:${l.port}/${l.database}`,
  searchPath: "public",
  migration: {
    tablename: "knex_migrations",
    directory: "../migrations"
  }
});

module.exports = db;
