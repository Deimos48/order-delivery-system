require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const redisClient = require('./redis/client');

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());
app.use(morgan('dev'));

// healthcheck
app.get('/health', async (req, res) => {
  res.json({
    status: 'ok',
    redis: redisClient.isOpen ? 'up' : 'down'
  });
});

// маршруты
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

// 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' });
});

// обработчик ошибок
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || 'Internal server error'
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`API server listening on port ${PORT}`);
  });
}

module.exports = app;
