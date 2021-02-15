#!/bin/sh

docker build -t aftrconsulting ../.
docker run --restart=always -dp 3000:3000 aftrconsulting