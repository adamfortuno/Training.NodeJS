const request = require('request');

// Gets the coordinates for a specified postal code
const getCoordinates = (postalCode, callback) => {
    const apiKey = "pk.eyJ1IjoiYWRhbWYtZ2VvIiwiYSI6ImNqd3MxcDIwMDFuOG00OHBsd2o1NjJuejUifQ.YtFSICRlKoPbwHHuGdKftg";
    postalCode = encodeURIComponent(postalCode);

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${postalCode}.json?access_token=${apiKey}&country=US&types=postcode`;

    const request_options = {
        url: url,
        json: true
    }

    request(request_options, (error, response) => {
        let location_geo_encoded

        if (!error) {
            if ( response.body.error ) {
                error = new Error(response.body.error);
            } else if ( response.body.features.length === 0 ) {
                error = new Error("Unable to encode specified location.");
            } else {
                location_geo_encoded = {
                    longitude : response.body.features[0].center[0],
                    latitude : response.body.features[0].center[1]
                }
            }
        }

        callback(error, location_geo_encoded);
    });

}

// Gets the weather for a specified area specified by lat and long
const getWeather = (longitude, latitude, callback) => {
    const url =
        `https://api.darksky.net/forecast/c60abdec63e489f3f628cc256390c70e/${longitude},${latitude}?units=us`;

    const request_options = {
        url: url,
        json: true
    };

    let location_weather;
    
    request(request_options, (error, response) => {
        if ( !error ) {
            if ( response.body.error ) {
                error = new Error(response.body.error);
            } else {
                location_weather = {
                    current_temperature : response.body.currently.temperature,
                    current_probability_precip : response.body.currently.precipProbability
                };
            }
        }

        callback(error, location_weather);
    });
}

module.exports.getWeather = getWeather;
module.exports.getCoordinates = getCoordinates;