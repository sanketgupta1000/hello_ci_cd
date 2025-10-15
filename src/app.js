const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

// dynamic endpoint
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}!`);
});

module.exports = app;