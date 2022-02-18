# docker_node_mongo

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const mongoose = require("mongoose");
mongoose.connect("mongodb://mon:27017/mydb").then(
  () => {
    console.log("connect DB ok");
  },
  (err) => {
    console.log(`Connect error: ${err}`);
  }
);
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(port, () => console.log(`Server run on port= ${port}`));


version: "3.7"
services:
  # database:
    # image: mysql:5.7
    # container_name: mysql
    # environment:
    #   MYSQL_USER: root
    #   MYSQL_PASSWORD: password
    #   MYSQL_ROOT_PASSWORD: password
    #   MYSQL_DATABASE: golang
    # ports:
    #   - "3307:3306"
    # volumes:
    #   - data:/var/lib/mysql
  # minio:
  #   image: 'bitnami/minio:latest'
  #   ports:
  #     - '9000:9000'
  #   environment:
  #     - MINIO_ACCESS_KEY=minio-access-key
  #     - MINIO_SECRET_KEY=minio-secret-key

  mon:
    image: mongo
    restart: always
    # container_name: mongodb
    # environment:
    #   MONGO_INITDB_ROOT_USERNAME: root
    #   MONGO_INITDB_ROOT_PASSWORD: root
    ports:
       - "27017:27017"
    # networks:
    #   - test-network

  server:
    build:
      context: .
      dockerfile: Dockerfile
    networks:
      - test-network
    depends_on:
      - mon
    ports:
      - "8001:8000"
    links:
      - mon
  # mailhog:
  #   container_name: mailhog
  #   image: mailhog/mailhog
  #   ports:
  #     - 1025:1025
  #     - 8025:8025
networks:
  test-network:
      external: true
      
volumes:
  data: {}


