FROM node:10-alpine

# # Create app directory
ENV APP_PATH /microservice_nodejs_template
WORKDIR $APP_PATH

# Copy package*.json and lerna.json to /microservice_nodejs_template
COPY ./package*.json ./
COPY ./lerna.json ./

# install lerna local
RUN npm install

# Bundle app source
COPY ./packages/base ./packages/base
COPY ./packages/api_gateway ./packages/api_gateway

# "lerna boostrap" will install all packages of base and api_gateway
RUN npx lerna bootstrap
# compile base: ts -> js
RUN npm run build:base 
# compile backend: ts -> js
RUN npm run build:api_gateway

EXPOSE 8000
CMD [ "npm", "--prefix", "packages/api_gateway", "run", "prod" ]