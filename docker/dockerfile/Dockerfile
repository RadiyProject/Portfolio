FROM node:18-alpine as development
ENV NODE_ENV development

WORKDIR /var/www/html

RUN set -eux \
    & apk add \
        --no-cache \
        nodejs \
        yarn

COPY package.json .
COPY yarn.lock .

RUN yarn global add yarn-deduplicate
RUN yarn-deduplicate
RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]