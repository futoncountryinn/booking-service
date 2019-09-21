FROM node:10.16.0
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app/
RUN npm install --no-package-lock
CMD [ "npm", "start" ]