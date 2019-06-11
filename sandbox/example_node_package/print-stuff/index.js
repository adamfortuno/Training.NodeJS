const print = require('frame-print');

let [, , message] = process.argv;

if (message) {
    print(message);
}
