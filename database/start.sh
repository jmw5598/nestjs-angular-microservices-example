#!/bin/sh

docker run \
  --name vsp_database \
  -p 5432:5432 \
  -e POSTGRES_USER=postgresRoot \
  -e POSTGRES_PASSWORD=postgresRoot \
  -d \
  latest/vsp_database
