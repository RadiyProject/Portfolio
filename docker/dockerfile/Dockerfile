FROM node:18-alpine as builder

WORKDIR /var/www/html

COPY package*.json ./
RUN npm install

CMD [ "npm", "start" ]