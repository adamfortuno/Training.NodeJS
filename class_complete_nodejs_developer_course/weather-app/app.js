'use strict';

const yargs = require('yargs');
const chalk = require('chalk');
const weather = require("./weather.js");

const log = console.log;

const logError = (error_message) => {
    log( chalk.red(error_message) );
};

let postal_code = process.argv[2];

weather.getCoordinates(postal_code, (error, coordinates) => {
    if ( error ) {
        logError( error );
    } else {
        weather.getWeather(coordinates.longitude, coordinates.latitude, coordinates.name, (error, weather) => {
            if ( error ) {
                logError ( error );
            } else {
                log( "It is currently %s degrees with a %s% chance of rain in %s.", weather.current_temperature, weather.current_probability_precip, coordinates.name );
            }
        });
    }
});