## Development Database Setup

### Unix Systems

1. Make `build.sh`, `start.sh`, `stop.sh`, `remove.sh`, and `migrate.sh` files executable with `chmod +x <filename>`.
2. Build docker images with `./build.sh`.
3. Run the docker image `./start.sh`.
4. Run database migrations with `./migrate.sh`
    1. You need dotnet 6 command tool and ef tools package installed to run migrations.
5. Connect to the database with `psql -h 127.0.0.1 -p 5545 -U vsp -W postgres` with password `password`.
6. You can stop the docker container with `./stop.sh`.
7. You can additionaly remove the docker container once stopped with `./stop.sh`.
