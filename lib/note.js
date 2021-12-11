const fs = require('fs');
const path = require('path');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
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
    return array;
}

/*function deleteNote(noteId,array) {
    console.log('in delete function');
    //console.log(noteId);
    //console.log(array);
    //filter the array in db.json file
    //find id from the array and if id doesnt exist, return the element to stay in array
    const filteredArray = array.filter(element => {
        if (element.id !== noteId) {
            return element;
        }
    })
    //console.log(filteredArray);
    //overwrite the old array with the newly filtered array of values
    writeFileAsync(path.join(__dirname, "../db/db.json"), JSON.stringify(filteredArray), err => {
        err ? console.log(err) : console.log("ADDED TO DB");
    })
        /*console.log("hit" + JSON.stringify(newFile));
        return JSON.stringify(newFile);
    return filteredArray;

}*/

module.exports = addNote;
