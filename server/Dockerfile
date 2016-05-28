FROM mhart/alpine-node

WORKDIR /tmp/server

COPY package.json ./
COPY app.js ./
COPY app ./app/
COPY bin ./bin/

RUN npm install -g .

EXPOSE 3000

CMD ["server"]
