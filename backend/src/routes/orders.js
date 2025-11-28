const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/OrderController');

// /api/orders
router.get('/', OrderController.getAllOrders);
router.get('/:id', OrderController.getOrderById);
router.post('/', OrderController.createOrder);

module.exports = router;
