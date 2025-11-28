# Базовый образ Node
FROM node:20-alpine

# Рабочая директория
WORKDIR /app

# Установка зависимостей
COPY package.json ./
RUN npm install --omit=dev

# Копируем исходники
COPY src ./src

# Открываем порт
ENV PORT=4000
EXPOSE 4000

# Команда запуска
CMD ["node", "src/app.js"]
