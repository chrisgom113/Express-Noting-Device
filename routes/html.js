//Import dependencies
const path = require('path');
const html = require('express').Router();

//Create route path for notes page
html.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '..public/notes.html'))
});

//Route path for root html page
html.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//Wildcard router
html.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..public/index.html'))
});

module.exports = html;