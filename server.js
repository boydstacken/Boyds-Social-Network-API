const express = require('express')
const mongoose = require('mongoose')
const data = require('./models/user');
const bodyParser = require('body-parser')

const app = express();
const PORT = 3001



app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1/my_database', {useNewUrlParser: true, useUnifiedTopology: true})
    .then (()=> {
        console.log('Connected to MongoDB')
        app.listen (PORT, () => {
            console.log (`Server is running on port ${PORT}`)
        })
    })
    .catch ((err) => {
        console.log('Could not connect to MongoDB', err)
    })