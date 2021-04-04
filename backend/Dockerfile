FROM node:13.7.0-alpine as development
LABEL maintainer="developers@fmp.com" environment="development" 

WORKDIR /app
RUN npm install -g nodemon
COPY package*.json /app/
RUN npm install
COPY . ./
EXPOSE ${BACKEND_PORT}

CMD ["/bin/sh", "./backend_watcher.sh"]