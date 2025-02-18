require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const errorHandler = require('./helpers/errorHandler')

mongoose.connect(process.env.DB_PATH, {
    useNewUrlParser: true
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use('/', require('./routes'))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})