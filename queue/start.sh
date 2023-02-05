#!/bin/sh

docker run \
  --name vsp_queue \
  --hostname localhost \
  -p 15672:15672 \
  -p 5672:5672 \
  -e RABBITMQ_DEFAULT_USER=vsp \
  -e RABBITMQ_DEFAULT_PASS=password \
  -d \
  latest/vsp_queue
  