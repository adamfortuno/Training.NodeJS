const eventEmitter = require('events');

const signalLight = new eventEmitter();

signalLight.on('Green', () => { console.log('Go!'); } );    

signalLight.emit('Green');
signalLight.emit('Red');
signalLight.emit('Yellow');
signalLight.emit('Green');