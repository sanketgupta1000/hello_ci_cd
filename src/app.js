const express = require('express');
const app = express();

// bad change, shouldn't be deployed to production
app.get('/hello', (req, res) => {
    res.send('Hello!');
});

// dynamic endpoint
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}!`);
});

module.exports = app;