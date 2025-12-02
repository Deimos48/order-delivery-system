const db = require('../db');

const OrderModel = {
  async getAll() {
    const result = await db.query(
      `SELECT id,
              customer_name,
              address,
              phone,
              status,
              items,
              total,
              created_at
       FROM orders
       ORDER BY created_at DESC`
    );
    return result.rows;
  },

  async getById(id) {
    const result = await db.query(
      `SELECT id,
              customer_name,
              address,
              phone,
              status,
              items,
              total,
              created_at
       FROM orders
       WHERE id = $1`,
      [id]
    );
    return result.rows[0] || null;
  },

  async create({ customerName, address, phone, items, total, status }) {
    const result = await db.query(
      `INSERT INTO orders
         (customer_name, address, phone, status, items, total)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id,
                 customer_name,
                 address,
                 phone,
                 status,
                 items,
                 total,
                 created_at`,
      [customerName, address, phone, status || 'NEW', JSON.stringify(items || []), total]
    );
    return result.rows[0];
  }
};

module.exports = OrderModel;
