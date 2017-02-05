FROM node:7.4.0

# download and configure nginx for production use
RUN apt-get update && apt-get install -y nginx
RUN mkdir -p /app/dist && chown www-data:www-data /app/dist
COPY nginx.conf /etc/nginx/nginx.conf

# download dependancies to /tmp
WORKDIR /tmp
COPY app/package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ &&\
    npm install

# copy node_modules from /tmp and copy ./app from host to image
WORKDIR /app
COPY ./app/ /app/
RUN cp -a /tmp/node_modules /app/

# set mode to production by default
ENV NODE_ENV=production

# run webpack in production
CMD ["npm", "run", "production"]

EXPOSE 80