FROM node:20.10.0-alpine

WORKDIR /app

COPY package*.json /.

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:prod"]