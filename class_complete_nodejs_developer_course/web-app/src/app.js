const path = require('path');
const express = require('express');

const log = console.log;
const app = express();
const now = new Date();

let public_directory = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(public_directory));

app.get('', (request, response) => {
    response.render('index', {
        name: 'test',
        thing: 'foo'
    });
});

app.get('/about', (request, response) => {
    response.render('about', {
        title: "About Page (handlebars)",
        date: now
    });
});

app.get('/help', (request, response) => {
    response.render('help', {
        title: "Help Page (handlebars)",
        date: now
    });
});

app.get('/weather', (request, response) => {
    response.send({
        name: "adam",
        age: 21
    });
});

app.listen(8080, (request, response) => log('Server is up!') );

