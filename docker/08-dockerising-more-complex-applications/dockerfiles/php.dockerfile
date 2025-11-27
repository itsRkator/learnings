FROM php:8.3.28-fpm-alpine

WORKDIR /var/www/html

COPY src .

RUN docker-php-ext-install pdo pdo_mysql

RUN chown -R www-data:www-data /var/www/html

# RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

# USER laravel

# CMD ["sh", "-c", "\
#     DB_HOST=${DB_HOST:-mysql}; \
#     DB_PORT=${DB_PORT:-3306}; \
#     echo \"Waiting for MySQL at ${DB_HOST}:${DB_PORT}\"; \
#     until php -r \"exit((bool) @fsockopen(getenv('DB_HOST') ?: '$DB_HOST', (int) (getenv('DB_PORT') ?: $DB_PORT)) ? 0 : 1);\"; do \
#     sleep 1; \
#     done; \
#     php artisan migrate --force && \
#     exec php-fpm \
#     "]