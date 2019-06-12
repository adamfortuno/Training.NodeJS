const path = require('path');
const express = require('express');
const log = console.log;

const app = express();
let public_directory = path.join(__dirname, '../public');

app.use(express.static(public_directory));

app.get('', (request, response) => {
    response.send('Helloworld!');
});

app.get('/weather', (request, response) => {
    response.send(`
    <html>
        <head>
            <title>Today's Weather</title>
        </head>
        <body>
            <h1>Weather in Philadelphia</h1>
        </body>
    </html>
    `);
});

app.listen(8080, (request, response) => log('Server is up!') );

