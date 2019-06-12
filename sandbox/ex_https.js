const https = require('https');
const url = 'https://api.darksky.net/forecast/c60abdec63e489f3f628cc256390c70e/39.95,75.16?units=us';
const log = console.log;

const request = https.request(url, (response) => {
    let data = '';

    response.on('data', chunk => data += chunk );
    response.on('end', () => log( JSON.parse(data) ) );
});

request.on('error', error => log(error) );
request.end();