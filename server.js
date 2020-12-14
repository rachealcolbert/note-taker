const express = require('express');
const {
    notes
} = require('./data/notes.json');


const PORT = process.env.PORT || 3001;
const app = express();

function findById(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    return result;
}

app.get('/', (req, res) => {
    let result = notes;
    res.json(result);
})

app.get('/api/notes', (req, res) => {
    let result = notes;
    res.json(result);
})
app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    res.json(result);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});