# node as a base
FROM node:22.15.0 AS base
WORKDIR /hello_ci_cd

# development build, will start a dev server
FROM base as dev
COPY package.json .
RUN npm install
COPY . .
CMD [ "npm", "start" ]

# production build stage
FROM base AS final
COPY ./package.json .
# build for production, do not install dev dependencies
RUN npm install --production
COPY . .
CMD [ "node", "index.js" ]