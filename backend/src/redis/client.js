require('dotenv').config();
const { createClient } = require('redis');

const redisUrl =
  process.env.REDIS_URL ||
  `redis://${process.env.REDIS_HOST || 'redis'}:${process.env.REDIS_PORT || 6379}`;

const client = createClient({ url: redisUrl });

client.on('error', (err) => {
  console.error('Redis client error', err);
});

(async () => {
  try {
    await client.connect();
    console.log('Connected to Redis');
  } catch (err) {
    console.error('Failed to connect to Redis:', err.message);
  }
})();

module.exports = client;
