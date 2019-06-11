const printHello = (duration) =>  {
    console.log(`Hello after ${duration} seconds`);
}

let duration;

duration = 4000;
setTimeout(printHello, duration, duration);

duration = 8000;
setTimeout(printHello, duration, duration);