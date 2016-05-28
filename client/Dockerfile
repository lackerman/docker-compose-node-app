FROM smebberson/alpine-nginx

COPY web.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/

COPY dist ./public/
COPY index.html ./
