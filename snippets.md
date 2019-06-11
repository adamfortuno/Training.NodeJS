Useful JavaScript snippets...

```javascript
// Waits for the specified time then runs the function
setTimeout( callbackFunction, timer );
```

```javascript
// Takes additional parameters passed to the callback function
setTimeout( callbackFunction, timeDuration, callbackFunctionArg, callbackFunctionArg, ...);
```

```javascript
// Executes the callback every specified number of seconds
setInterval(callbackFunction, occurrenceInterval);
```

```javascript
// Clears the timeout call.The clear runs once any intervening
// statements run.
const t = setInterval(cbf, 2);
clearTimeout(t);
```

```javascript
// You can pull environment variables through the process.env
// object
export V1=100
node -p "console.log('My value is: ', process.env.V1);"
// equals 100
```

```javascript
process.stdout.write('helloworld');
console.log('helloworld');
```

```javascript
// Attaches a listener which reflects what it
// sees
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(chunk);
    }
});

// Terminates the process
process.exit();
```


```javascript
// as node exits, it looks for any listeners on the exit command
setTimeout( () => process.exit(), 1000);

process.on('exit', () => {
    console.log('bye bye!');
});

console.log('Helloworld!');
```

```javascript
// Element is returned if express returns true
array.filter( element => { ... } );
```

```javascript
// Returns first element that causes expression to be true
array.find( element => { ... } );
```

```javascript
array.forEach( element => {...} );
```