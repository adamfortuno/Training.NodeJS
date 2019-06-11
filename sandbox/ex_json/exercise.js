'use strict';

const fs = require('fs');
const log = console.log;
const data_file = 'exercise.json';

let source_data = fs.readFileSync(data_file).toString();
log("Read: ", source_data);

let source_object = JSON.parse(source_data);

source_object.name = (source_object.name === "Andrew") ? "Peter" : "Andrew";
++source_object.age;

let target_data = JSON.stringify(source_object);
log("Writing: ", target_data);

fs.writeFileSync(data_file, target_data);