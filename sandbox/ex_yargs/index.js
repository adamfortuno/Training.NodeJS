const yargs = require('yargs');

yargs.version('1.1.0');

command_add = {
    "command" : "add",
    "description" : "Add a note.",
    "handler" : () => {
        console.log("You just added a note.");
    }
};

command_remove = {
    "command" : "remove",
    "description" : "Remove a note.",
    "handler" : () => {
        console.log("You just removed a note.");
    }
};

command_list = {
    "command" : "list",
    "description" : "List a note.",
    "handler" : () => {
        console.log("You just listed a note.");
    }
};

command_read = {
    "command" : "read",
    "description" : "Read a note.",
    "handler" : () => {
        console.log("You just read a note.");
    }
};

yargs.command(command_add);
yargs.command(command_remove);
yargs.command(command_list);
yargs.command(command_read);

console.log(yargs.argv);