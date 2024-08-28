FROM node:18-alpine as builder

WORKDIR /var/www/html

COPY package*.json ./
RUN npm install
RUN npm install --global yarn

CMD [ "npm", "start" ]