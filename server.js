const express = require('express');
const {
    notes
} = require('./data/notes.json');
const fs = require('fs');
const path = require('path');


const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'));


function findById(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    return result;
}

function createNewNote(body, notesArray) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, './data/notes.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    );
    return note;
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

app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});