'use strict';

const logError = (error_message) => {
    log( (error_message) );
};

const path = require('path');
const express = require('express');
const hbs = require('hbs');
const weather = require("./weather.js");

const log = console.log;
const app = express();
const now = new Date();

let public_directory = path.join(__dirname, '../public');
let views_directory = path.join(__dirname, '../templates/views');
let partials_directory = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', views_directory);
hbs.registerPartials(partials_directory);

app.use(express.static(public_directory));

app.get('', (request, response) => {
    response.render('index', {
        name: 'Adam',
        thing: 'foo',
        date: now
    });
});

app.get('/about', (request, response) => {
    response.render('about', {
        title: "About Page (handlebars)",
        name: "Adam",
        date: now
    });
});

app.get('/weather', (request, response) => {
    let postal_code = (!request.query.postalCode) ? 19087 : request.query.postalCode;
    
    weather.getCoordinates(postal_code, (error, coordinates) => {
        if ( error ) {
            response.render('error', {
                title: "Error Occurred",
                error,
                date: now
            });
        } else {
            weather.getWeather(coordinates, (error, weather) => {
                if ( error ) {
                    response.render('error', {
                        title: "Error Occurred",
                        error,
                        date: now
                    });
                } else {
                    response.send({
                        title: "Forecast Page",
                        current_temperature: weather.current_temperature,
                        current_probability_precip: weather.current_probability_precip,
                        locale_name: coordinates.name,
                        date: now
                    });
                }
            });
        }
    });
});

app.get('/forecast', (request, response) => {
    response.render('forecast', {
        name: 'Adam',
        date: now
    });
});


// catch all for a 404 after the help path
app.get('/help/*', (request, response) => {
    response.send("<h1>You wanted a help page!</h1>");
})

// catch all for any 404
app.get('*', (request, response) => {
    response.render('404');
})

app.listen(8080, (request, response) => log('Server is up!') );

