const fs = require('fs');
const dataJson = require('./data.json');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const arrNotes = [];
  for (const note in dataJson.notes) {
    arrNotes.push(dataJson.notes[note]);
  }
  res.status(200).json(arrNotes);
});

app.get('/api/notes/:id', (req, res) => {
  const idNote = req.params.id;
  if (idNote < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (dataJson.notes[idNote] !== undefined) {
    return res.status(200).json(dataJson.notes[idNote]);
  } else {
    res.status(404).json({ error: `Cannot find note with id ${idNote}` });
  }
});

app.post('/api/notes', (req, res) => {
  const currentnextId = dataJson.nextId;
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content) {
    dataJson.notes[currentnextId] = {
      content: req.body.content,
      id: currentnextId
    };
    dataJson.nextId++;
    const newNote = JSON.stringify(dataJson, null, 2);
    fs.writeFile('./data.json', newNote, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json({
          id: currentnextId,
          content: req.body.content
        });
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const idNote = req.params.id;
  if (idNote < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (dataJson.notes[idNote] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${idNote}` });
  } else {
    delete dataJson.notes[idNote];
  }

  fs.writeFile('./data.json', JSON.stringify(dataJson, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      res.sendStatus(204);
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const idNote = Number(req.params.id);
  if (idNote < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (dataJson.notes[idNote] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${idNote}` });
  }

  dataJson.notes[idNote] = {
    content: req.body.content,
    id: idNote
  };
  const newNote = JSON.stringify(dataJson, null, 2);
  fs.writeFile('./data.json', newNote, err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      res.status(200).json(dataJson.notes[idNote]);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
