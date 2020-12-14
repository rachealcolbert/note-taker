const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});

const {
    notes
} = require('./db/db.json');

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});