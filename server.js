//Dependencies
const express = require('express');

//Routers
const api = require('./routes/api');
const html = require('./routes/html');

//Server
const app = express();

//PORT
const PORT = process.env.PORT || 3001;

//Parse URL encoded data as well as JSON-formatted data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Middleware
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);

//Listener
app.listen(PORT, () => {
    console.log(`Listening now on port ${PORT}!`)
});