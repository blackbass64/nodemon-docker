# Nodemon Docker
local development using nodemon in docker container 🐳
You don't need to install Node.js or npm on your machine to develop Node.js, just using only Docker.

## Start developing on local machine
Before you begin, you need to make sure you have installed [Docker Desktop](https://www.docker.com/products/docker-desktop)

Start project, run

```bash
docker-compose up
```

ถ้าคุณต้องการใช้ commands เกี่ยวกับ npm หรือ node คุณแค่รัน

```bash
docker-compose run app command ที่ต้องการ
```
ex. `docker-compose run app npm install jest --save`

ถ้าคุณต้องการ re build the containner please stop the current containner and run the following commands below
```bash
docker-compose up --build
```
