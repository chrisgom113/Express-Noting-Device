//Dependencies
const api = require('express').Router();

const saveData = require('../db/saveData');

//GET
api.get('/notes', (req,res) => {
    saveData
    .retrieveNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

//POST
api.post('/notes', (req, res) => {
    saveData
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

//DELETE
api.delete('/notes/:id', function (req, res) {
    saveData
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true}))
        .catch(err => res.status(500).json(err));
});

module.exports = api;