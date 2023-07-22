const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const mongoose = require ('mongoose');


mongoose.connect('mongodb://localhost:3001/db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
const PORT = process.env.PORT || 3001;
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`API server running on ${PORT}`)
})
})
.catch((error) => {
  console.error('Failed to connect to MongoDB', error)
})
