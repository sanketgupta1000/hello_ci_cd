const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

// let's try to add an endpoint to check if the workflow runs after pull request
app.get('/hellocicd', (req, res)=>
{
    res.send("Hello CI/CD!");
});

module.exports = app;