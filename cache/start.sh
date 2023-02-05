#!/bin/sh

docker run \
  --name vsp_cache \
  -p 6379:6379 \
  -d \
  latest/vsp_cache
