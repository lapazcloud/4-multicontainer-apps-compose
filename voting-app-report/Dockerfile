FROM node:6.10.2-alpine
COPY . /var/www
ENV NODE_ENV production
ENV PORT 8081
RUN cd /var/www && npm install
WORKDIR /var/www
ENTRYPOINT ["npm", "start"]