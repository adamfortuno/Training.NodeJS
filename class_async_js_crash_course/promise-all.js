console.log('Running Promise-all.js');

const p1 = Promise.resolve('thinger');
const p2 = new Promise((res, rej) => setTimeout(res, 2000, 'Done'));

// Waits for all the promises to finish
Promise.all([p1, p2]).then( (val) => { console.log(val) } );