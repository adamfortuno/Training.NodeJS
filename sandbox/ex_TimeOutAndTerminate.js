setTimeout( () => process.exit(), 1000);

process.on('exit', () => {
    console.log('bye bye!');
});

console.log('Helloworld!');