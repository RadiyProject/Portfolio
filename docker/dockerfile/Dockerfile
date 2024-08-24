FROM node:18-alpine as builder

WORKDIR /var/www/app

COPY package*.json ./
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]