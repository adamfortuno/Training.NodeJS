'use strict';

const fs = require('fs');
const file_name = 'thinger.json';

function writeIt(file_name) {
    const book = {
        "title" : "Why Are Her Tits So Big?",
        "author" : "Grimmy Motherfucker!"
    }
    
    const book_json = JSON.stringify(book);
    fs.writeFileSync(file_name, book_json);
}

function readIt(file_name) {
    let book_json = fs.readFileSync(file_name).toString();
    let book = JSON.parse(book_json);

    console.log(book.title);
}

writeIt();
readIt();