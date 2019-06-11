const h = require('https');

function getPage(url) {
    return new Promise((resolve, reject) => {
        h.get(url, (res) => {
            let data = ''
            res.on('data', (rd) => data = data + rd);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        });
    });
}

getPage('https://www.google.com/').then(
    (data) => { console.log(data.length); },
    (error) => { throw error; }
)


node --inspect-brk <script-name.js>

chrome://inspect/#devices

