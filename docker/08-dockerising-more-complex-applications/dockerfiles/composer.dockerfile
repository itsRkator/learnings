FROM composer:latest

WORKDIR /var/www/html

RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

USER laravel

ENTRYPOINT [ "composer", "--ignore-platform-reqs" ]