FROM node:6.10.2-alpine
COPY . /var/www
RUN cd /var/www && npm install
WORKDIR /var/www
ENTRYPOINT ["npm", "start"]