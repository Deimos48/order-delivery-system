const ProductModel = require('../models/ProductModel');

const ProductController = {
  async getAllProducts(req, res, next) {
    try {
      const products = await ProductModel.getAll();

      const mapped = products.map(p => ({
        id: p.id,
        title: p.name,
        description: p.description,
        price: p.price,
        image: p.image_url
      }));

      res.json(mapped);
    } catch (err) {
      next(err);
    }
  },

  async getProductById(req, res, next) {
    try {
      const p = await ProductModel.getById(req.params.id);

      if (!p) return res.status(404).json({ message: 'Not found' });

      res.json({
        id: p.id,
        title: p.name,
        description: p.description,
        price: p.price,
        image: p.image_url
      });
    } catch (err) {
      next(err);
    }
  },

  async createProduct(req, res, next) {
    try {
      const product = await ProductModel.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      next(err);
    }
  },

  async updateProduct(req, res, next) {
    try {
      const product = await ProductModel.update(req.params.id, req.body);
      res.json(product);
    } catch (err) {
      next(err);
    }
  },

  async deleteProduct(req, res, next) {
    try {
      await ProductModel.remove(req.params.id);
      res.json({ success: true });
    } catch (err) {
      next(err);
    }
  }
};

module.exports = ProductController;
