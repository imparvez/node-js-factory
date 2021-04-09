# To deploy ReactJS application in our Docker container, we need to go with multi-build step
# - build-step: To build our ReactJS application into Production level package.
# - run-step: Here we will deploy ReactJS application into our NGINX web server.

FROM node:alpine3.10 as build-step

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

RUN npm run build

FROM nginx:1.19.8-alpine
COPY --from=build-step /app/build /usr/share/nginx/html