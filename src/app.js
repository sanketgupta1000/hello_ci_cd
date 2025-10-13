const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

// new endpoint to check if workflow runs or not
app.get('/hellocicd', (req, res) => {
    res.send('Hello CI/CD!')
})

module.exports = app;