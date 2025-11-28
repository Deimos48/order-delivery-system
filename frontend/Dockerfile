# 1) Node для сборки фронта
FROM node:20 as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


# 2) Nginx для запуска статики
FROM nginx:1.25

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
