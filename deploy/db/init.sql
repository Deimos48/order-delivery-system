-- Создание таблицы продуктов
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC(10,2) NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT now()
);

-- Создание таблицы заказов
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    customer_name TEXT NOT NULL,
    address TEXT NOT NULL,
    phone TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'NEW',
    items JSONB NOT NULL,
    total NUMERIC(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT now()
);

-- Наполнение таблицы products тестовыми данными
INSERT INTO products (name, description, price, image_url) VALUES
('Пицца Маргарита', 'Классическая пицца с томатами и моцареллой', 550.00, 'https://via.placeholder.com/300x200?text=Маргарита'),
('Пепперони', 'Острая пицца с колбасой пепперони', 620.00, 'https://via.placeholder.com/300x200?text=Пепперони'),
('Карбонара', 'Сливочный соус, бекон, сыр', 640.00, 'https://via.placeholder.com/300x200?text=Карбонара'),
('Суши сет', 'Ассорти роллов и суши', 890.00, 'https://via.placeholder.com/300x200?text=Суши+сет'),
('Бургер Классический', 'Говяжья котлета, сыр, овощи', 450.00, 'https://via.placeholder.com/300x200?text=Бургер'),
('Лимонад', 'Домашний лимонад 0.5л', 150.00, 'https://via.placeholder.com/300x200?text=Лимонад');
