const fs = require('fs');
const path = require('path');
// Helper method for generating unique ids
// https://www.npmjs.com/package/uuid
// npmnpm
// uuid
// RFC4122 (v1, v4, and v5) UUIDs
const uuid = require('../helpers/helpers');

function addNote(body, array) {
    //assign unique id to each note
    body.id = uuid();
    //push each note to the array of notes
    array.push(body);
    //overwrite file to existing directory with new version of array
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(array, null, 2), err => {
        err ? console.log(err) : console.log("ADDED TO DB");
    });
    //return body;
}

function deleteNote(note,array) {
    const filteredArray = array.forEach(element => {
        if (element.id === note.id) {
            return element;
        }
    })
    console.log(filteredArray);
}

module.exports = {
    addNote,
    deleteNote
};
