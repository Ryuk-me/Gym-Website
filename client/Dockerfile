FROM node:18-alpine AS build

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn run build


### PRODUCTION

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8011
CMD ["nginx", "-g", "daemon off;"]