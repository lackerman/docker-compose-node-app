FROM mhart/alpine-node

WORKDIR /tmp/basic-ws

COPY package.json ./
COPY app ./app/
COPY bin ./bin/

RUN npm install -g .

EXPOSE 3000

CMD ["basic-ws"]