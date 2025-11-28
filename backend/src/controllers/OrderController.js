const OrderModel = require('../model/OrderModel');

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await OrderModel.getAll();
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

exports.getOrderById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: 'Invalid order id' });
    }

    const order = await OrderModel.getById(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (err) {
    next(err);
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    const { customerName, address, phone, items } = req.body;

    if (!customerName || !address || !phone || !Array.isArray(items)) {
      return res.status(400).json({ message: 'Invalid order payload' });
    }

    // простой расчёт суммы: price * quantity из body
    const total = items.reduce((sum, item) => {
      const price = Number(item.price) || 0;
      const qty = Number(item.quantity) || 1;
      return sum + price * qty;
    }, 0);

    const order = await OrderModel.create({
      customerName,
      address,
      phone,
      items,
      total,
      status: 'NEW'
    });

    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};
