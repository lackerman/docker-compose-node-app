FROM smebberson/alpine-nginx

COPY web.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/

COPY scripts ./scripts/
COPY index.html ./
