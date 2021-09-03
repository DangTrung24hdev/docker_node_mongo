FROM alpine:latest
RUN apk add --update nodejs npm
WORKDIR /app
COPY . /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 8000
CMD ["node", "app.js"]
