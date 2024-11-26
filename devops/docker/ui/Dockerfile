FROM node:12-alpine as dev

ARG NPM_TOKEN
ARG APP_ENV=dev
ENV APP_ENV ${APP_ENV}
ENV NODE_ENV ${APP_ENV}
ENV NPM_TOKEN ${NPM_TOKEN}

RUN mkdir -p /usr/app
WORKDIR /usr/app

#Install App
COPY webpack.config.dev.js ./webpack.config.dev.js
COPY webpack.config.prod.js ./webpack.config.prod.js
COPY webpack.config.common.js ./webpack.config.common.js
COPY tsconfig.json ./tsconfig.json
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
COPY public ./public
COPY src ./src

RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ./.npmrc
RUN npm install

RUN echo "ENV = $NODE_ENV"
RUN set -ex; \
  if [ "$NODE_ENV" = "prod" ]; then \
    npm run build; \
  fi;

EXPOSE 3000
EXPOSE 35729

ADD docker/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod a+rx /docker-entrypoint.sh
CMD /docker-entrypoint.sh $NODE_ENV

FROM nginx:alpine AS prod

ENV APP_URL ${APP_URL}

WORKDIR /usr/app
COPY ./docker/nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=dev /usr/app/dist .
EXPOSE 80