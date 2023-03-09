#!/bin/bash

# Runs a mongo db as a container
# -d runs the container in background, so that we are free to use the current terminal instance;
# --name mongo-on-docker defines a friendly name for the container;
# -p 27888:27017 declares that the local port 27888 is mapped to the internal 27017 port;
# -e MONGO_INITDB_ROOT_USERNAME=mongoadmin sets the root username (-e sets the environment variables);
# -r MONGO_INITDB_ROOT_PASSWORD=secret sets the root password;
# mongo is the name of the image to run
docker run -d  --name mongo-on-docker  -p 27888:27017 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
docker ps | grep mongo