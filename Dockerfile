FROM node:20.10.0-alpine
EXPOSE 3000
WORKDIR /app

COPY package*.json /.

RUN npm install

COPY . .

COPY ./dist ./dist

RUN npm run build

CMD ["npm", "run", "start:prod"]

