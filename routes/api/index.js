const path = require('path');
const router = require('express').Router();
//deconstruct notes json and require it in the app
//deconstructing notes ACTUALLY broke it
const notes = require('../../db/db.json');
const {addNote, deleteNote} = require('../../lib/note');

//when you visit the notes, get the current list and send the json results
router.get('/notes', (req,res) => {
    let results = notes;
    console.log('in notes');
    res.json(results);
});

router.post('/notes', (req,res) => {
    console.log(req.body);
    const noteAdded = addNote(req.body, notes);
    res.json(noteAdded);
})

router.delete('/notes/:id', (req,res) => {
    console.log(req.body);
    //const deleteNotes = deleteNote(req.body, notes);
    //res.json(req.body);
})
/*router.delete('/notes/:id', (req,res) => {
    console.log(req.body);
    const deleteNotes = deleteNote(req.body, notes);
    //res.json(req.body);
})*/



module.exports = router;