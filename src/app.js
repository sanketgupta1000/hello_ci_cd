const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World!!!!')
})

// add a new endpoint to see if workflow runs or not
app.get('/hellocicd', (req, res) => {
    res.send('Hello CI/CD!')
})

module.exports = app;