const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: "todoapp_rjos",
});

module.exports = pool;
