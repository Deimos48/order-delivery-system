const ProductModel = require('../model/ProductModel');
const redisClient = require('../redis/client');

const CACHE_KEY_ALL = 'products:all';
const CACHE_TTL = 60; // сек

exports.getAllProducts = async (req, res, next) => {
  try {
    if (redisClient.isOpen) {
      const cached = await redisClient.get(CACHE_KEY_ALL);
      if (cached) {
        return res.json(JSON.parse(cached));
      }
    }

    const products = await ProductModel.getAll();

    if (redisClient.isOpen) {
      await redisClient.setEx(CACHE_KEY_ALL, CACHE_TTL, JSON.stringify(products));
    }

    res.json(products);
  } catch (err) {
    next(err);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: 'Invalid product id' });
    }

    const product = await ProductModel.getById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (err) {
    next(err);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const { name, description, price, imageUrl } = req.body;

    if (!name || typeof price !== 'number') {
      return res.status(400).json({ message: 'Name and numeric price are required' });
    }

    const product = await ProductModel.create({ name, description, price, imageUrl });

    // инвалидируем кэш списка
    if (redisClient.isOpen) {
      await redisClient.del(CACHE_KEY_ALL);
    }

    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { name, description, price, imageUrl } = req.body;

    if (Number.isNaN(id)) {
      return res.status(400).json({ message: 'Invalid product id' });
    }

    const product = await ProductModel.update(id, {
      name,
      description,
      price,
      imageUrl
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (redisClient.isOpen) {
      await redisClient.del(CACHE_KEY_ALL);
    }

    res.json(product);
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: 'Invalid product id' });
    }

    const deleted = await ProductModel.remove(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (redisClient.isOpen) {
      await redisClient.del(CACHE_KEY_ALL);
    }

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
