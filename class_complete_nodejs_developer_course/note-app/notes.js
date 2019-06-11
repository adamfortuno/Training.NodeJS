'use strict'

const fs = require('fs');
const data_file = './notes.json';
const log = console.log;

const GetNotes = () => {
    let notes_data = [];
    
    try {
        notes_data = JSON.parse(fs.readFileSync(data_file).toString());
    } catch (error) { }

    return notes_data;
}

const SaveNotes = (notes) => {
    fs.writeFileSync(data_file, JSON.stringify(notes));
}

const DeleteNote = (title) => {
    let notes = GetNotes();
    let new_notes = [];
    let was_found = false;
    
    notes.forEach(element => {
        if (element.title != title) {
            new_notes.push(element);
        } else {
            was_found = true;
        }
    });

    SaveNotes(new_notes);
    return was_found;
}

const AddNote = (title, message) => {
    let notes = GetNotes();
    
    let is_duplicate = notes.find(note => note.title.toLowerCase() === title.toLowerCase());
    
    if (!is_duplicate) {
        notes.push({
            "title": title,
            "body": message
        });
        
        SaveNotes(notes);
    }

    return (is_duplicate === undefined);
}

const ReadNote = (title) => {
    let notes = GetNotes();

    return  notes.find(note => note.title.toLowerCase() === title.toLowerCase());
}

module.exports = {
    "GetNotes" : GetNotes,
    "AddNote" : AddNote,
    "DeleteNote" : DeleteNote,
    "ReadNote" : ReadNote,
}