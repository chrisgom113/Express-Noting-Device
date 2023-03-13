const api = require('express').Router();

const saveData = require('../db/saveData');

//GET route
api.get('/notes', (req,res) => {
    saveData
    .retrieveNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

//POST route
api.post('/notes', (req, res) => {
    saveData
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

module.exports = api;