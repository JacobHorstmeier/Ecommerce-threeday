const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , ctrl = require('./ctrl')
    
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))


const port = 3030
app.listen(port, () => console.log(`Sipping Honey on ${port}`))