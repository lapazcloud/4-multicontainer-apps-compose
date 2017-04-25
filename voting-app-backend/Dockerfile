FROM node:6.10.2-alpine
COPY . /var/www
ENV NODE_ENV production
ENV MASTER_KEY SomeKey
RUN cd /var/www && npm install
WORKDIR /var/www
ENTRYPOINT ["npm", "start"]