const db = require('../db');

const ProductModel = {
  async getAll() {
    const result = await db.query(
      `SELECT id, name, description, price, image_url
       FROM products
       ORDER BY id`
    );
    return result.rows;
  },

  async getById(id) {
    const result = await db.query(
      `SELECT id, name, description, price, image_url
       FROM products
       WHERE id = $1`,
      [id]
    );
    return result.rows[0] || null;
  },

  async create({ name, description, price, imageUrl }) {
    const result = await db.query(
      `INSERT INTO products (name, description, price, image_url)
       VALUES ($1, $2, $3, $4)
       RETURNING id, name, description, price, image_url`,
      [name, description || '', price, imageUrl || null]
    );
    return result.rows[0];
  },

  async update(id, { name, description, price, imageUrl }) {
    const result = await db.query(
      `UPDATE products
       SET name = $1,
           description = $2,
           price = $3,
           image_url = $4
       WHERE id = $5
       RETURNING id, name, description, price, image_url`,
      [name, description || '', price, imageUrl || null, id]
    );
    return result.rows[0] || null;
  },

  async remove(id) {
    const result = await db.query(
      `DELETE FROM products
       WHERE id = $1
       RETURNING id`,
      [id]
    );
    return result.rowCount > 0;
  }
};

module.exports = ProductModel;
