let occurrences = 0;

let i = setInterval( () => {
    occurrences++;

    console.log('Hello world!');

    if (occurrences === 5) {
        console.log('Done!');
        clearInterval(i);
    }
}, 1000);