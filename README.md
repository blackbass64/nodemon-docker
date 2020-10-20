# Nodemon Docker
local development using nodemon in docker container 🐳
You don't need to install Node.js or npm on your machine to develop Node.js, just using only Docker.

## Start developing on local machine
Before you begin, you need to make sure you have installed [Docker Desktop](https://www.docker.com/products/docker-desktop)

Start project, run

```bash
docker-compose up
```

In case if you want to use npm or Node.js commands.

```bash
docker-compose run --rm app <YOUR-DESIRED-COMMAND>
```
ex. `docker-compose run app npm install jest --save`

If you want to re-build the container please stop the current one and run the following command below.
```bash
docker-compose up --build
```
