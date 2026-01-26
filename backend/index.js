const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./databases/server')

const app = express()
const PORT = 3000 || process.env.PORT

app.use(cors())

app.use(express.json())

app.use('/api', require('./routes/auth.routes'))

app.get('/', (req, res) => {
    res.send('Api en funcionamiento')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})