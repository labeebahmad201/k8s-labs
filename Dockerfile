FROM node:current-slim

COPY . /src

RUN cd /src; yarn install

WORKDIR /src

CMD ["yarn", "start"]