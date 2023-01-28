#!/bin/sh

# Run Seed Dev Account
psql vsp -W -h 127.0.0.1 -d vsp -f seed-dev-user.sql

# Run Seed Data Script
psql vsp -W -h 127.0.0.1 -d vsp -f seed.sql
