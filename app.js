const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Node.js local development on Docker container and Nodemon work!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
