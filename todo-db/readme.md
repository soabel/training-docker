# Deploy Mongo Database

docker pull mongo:latest
docker run --name db-mongo -p 27017:27017 -d mongo:latest
