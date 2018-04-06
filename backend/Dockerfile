FROM node:8.11.1-slim

COPY src src
COPY ./package.json ./package.json
COPY graphql-schema graphql-schema
COPY ./tsconfig.json ./tsconfig.json

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]