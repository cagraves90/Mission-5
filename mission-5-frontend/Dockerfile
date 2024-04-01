# Create image based on the official Node image from dockerhub
FROM node:21-alpine 

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 5173

CMD [ "npm", "run", "dev" ]









