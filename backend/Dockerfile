# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

FROM node:21-alpine

RUN npm install -g nodemon

WORKDIR /usr/src/app

# Copy dependency definitions
# COPY package.json /usr/src/app
# COPY package-lock.json /usr/src/app

COPY . . /usr/src/app/

RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "dev" ]


