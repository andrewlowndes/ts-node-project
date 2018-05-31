FROM node:8

WORKDIR /home/nodejs/app

COPY package.json .
RUN npm install
COPY src src

ENV  NODE_ENV production

EXPOSE 8080
CMD [ "npm", "start" ]