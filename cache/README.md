# Redis Cache

This is a dockerfile to setup Redish for caching for development purposes.  You can opt out of using the Redis cache by changing `CACHE_USE_REDIS` flag on `server/environments/dev.env` file.

### Requirements
1. docker

### Setup
1. Build the docker image with `./build.sh`.
2. Start the docker image with `./start.sh`.