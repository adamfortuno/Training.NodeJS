'use strict';

const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');

const log = console.log;

yargs.version('1.0.1');
debugger
// Add Note Command
yargs.command({
    "command" : "add",
    "describe" : "Add a new note.",
    "builder" : {
        "title" : {
            "describe" : "Title of your note.",
            "demandOption" : true,
            "type" : "string"
        },
        "body" : {
            "describe" : "Body of your note.",
            "demandOption" : true,
            "type" : "string"
        }
    },
    handler(argv) {
        if ( notes.AddNote(argv.title, argv.body) ) {
            log(chalk.green("Adding Note"));
            log(chalk.bold("Title:\t"), argv.title);
            log(chalk.bold("Body:\t"), argv.body);
        } else {
            log( chalk.red("There is already a note with this title.") );
        }
    }
});

// Read Note Command
yargs.command({
    "command" : "read",
    "describe" : "Retrieves a specific note for your review.",
    "builder" : {
        "title" : {
            "describe" : "Title of the note you'd like to read.",
            "demandOption" : true,
            "type" : "string"
        }
    },
    handler(argv) {
        let note = notes.ReadNote(argv.title);
        
        if (note) {
            log (chalk.bold(note.title), note.body);
        } else {
            log(chalk.red("Unable to find %s."), argv.title);
        }
    }
});

// Delete Note Command
yargs.command({
    "command" : "delete",
    "describe" : "Delete an existing note.",
    "builder" : {
        "title" : {
            "describe" : "Title of the note to delete.",
            "demandOption" : true,
            "type" : "string"
        }
    },
    handler(argv) {
        if ( notes.DeleteNote(argv.title) === true ) {
            log( chalk.inverse.green("Note Removed!") );
        } else {
            log ( chalk.inverse.red("No Note Found!") );
        }
    }
});

// List Command
yargs.command({
    command: "list",
    describe: "List all your notes.",
    handler(argv) {
        let my_notes = notes.GetNotes();
        
        my_notes.forEach(element => {
            log(chalk.green('Title: %s\n%s\n'), element.title, element.body);
        });
    }
});

yargs.parse();