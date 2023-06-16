FROM node:18-alpine

COPY . /src

RUN cd /src; yarn install

# Set the ownership of the /src directory to the "node" user
RUN chown -R node:node /src

USER node

WORKDIR /src

CMD ["yarn", "start"]