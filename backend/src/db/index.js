require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'postgres',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'orders_db'
});

pool.on('error', (err) => {
  console.error('Unexpected PG client error', err);
  process.exit(-1);
});

const query = (text, params) => pool.query(text, params);

module.exports = {
  pool,
  query
};
