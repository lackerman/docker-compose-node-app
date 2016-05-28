# Node Web App Template using docker-compose

Todo Single Page Application hosted on nginx with a reverse proxy to a basic
NodeJS express server connecting to Postgres all run with docker-compose

3 containers
- nodejs & express (server)
- postgres
- client (client)

```shell
# Startup the system
docker-compose up --rm

# Remove all exited containers
docker rm -v $(docker ps -a -q --filter="status=exited")

# Remove dangling (untagged images)
docker rmi $(docker images -q -f "dangling=true")
```

### Thanks

Thanks to the following guys for their great alpine-based docker images
- [Michael Hart](https://github.com/mhart) for [alpine-node](https://hub.docker.com/r/mhart/alpine-node/)
- [kost](https://github.com/kost) for [alpine-postgres](https://hub.docker.com/r/k0st/alpine-postgres/)
- [Scott Mebberson](https://github.com/smebberson) for [alpine-nginx](https://hub.docker.com/r/smebberson/alpine-nginx/)
