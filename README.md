# nodemon-docker
## 💻 How to develop in local machine
### Install library
```bash
docker-compose -f docker-compose.local.yaml run app <command>
```
> like a `docker-compose -f docker-compose.local.yaml run app npm install express --save`

### Run
```bash
docker-compose -f docker-compose.local.yaml up
```

### Run with rebuild
```bash
docker-compose -f docker-compose.local.yaml up --build
```
