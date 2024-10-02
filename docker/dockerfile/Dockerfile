FROM node:18-alpine as development
ENV NODE_ENV development

WORKDIR /var/www/html

COPY package.json .
COPY yarn.lock .
RUN npm i

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]