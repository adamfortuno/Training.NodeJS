# Training.JavaScript.Async

Exploratory development in my learning of JavaScript and NodeJS. Artifacts here relate to handling of async. tasks.

## References

* [Async JS Crash Course - Callbacks, Promises, Async Await](https://www.youtube.com/watch?v=PoRJizFvM7s): PHAT walkthrough of callbacks, promises, and async. awaits. This was the reference that made it click.
* [Eloquent JavaScript](https://eloquentjavascript.net/): Eh, this was "okay". Distracting analogy about Corvids with smart nests powered by insects. That said, it seems like a good reference.

## Notes

1. Waiting for actions to finish is *implicit* in *synchronous programming*.
1. Waiting for actions to finish is *explicit* in *asynchronous programming*.
1. A function doing asynchronous work typically returns before the work is done.
1. The major JavaScript programming platforms (i.e., browsers and Node.js) make operations that can take a while asynchronous.
    1. Handling async operations
        * **Callbacks**: You tell the async function what function you want to run when its finished.
        * **Promises**: A promise is an object that represents an operation, which may complete at some point.
        * **Async-Await**: 
1. Any function that calls a function that works asynchronously must itself be asynchronous; using a callback or similar mechanism to deliver its result.
    * In the following example, if the handler had a return value, it couldn't perform asynchronous actions.
        ```
        function highOrderFunc('thing', (handler_p1, handler_p2, callback) => {
            console.log($handler_p1, $handler_p2};
            callback();
        });
        ```

        ```
        let operation = new Promise(
            callback(resolve, reject) { }
        );

        operation.then(
            callback_resolve,
            callback_reject
        );
        ```

    * `Promise.resolve()` ensures that the supplied value is wrapped in a promise.
        * If it’s already a promise, it is returned.
        * If not, you get a new promise that immediately finishes with your value as its result.
        ``` 
        let fifteen = Promise.resolve(15);
        fifteen.then((v) => console.log(v));
        ```
    * `<promise>.then()` registers a callback function to be called when the promise resolves.
        * You can add multiple callbacks to a promise.
        * You can add callbacks to a promise even if its resolved.
        * Returns a promise that resolves to the callback function's return value
1. A widely used convention is that...
    1. First argument to the callback: indicates the action failed
    1. Second arugment to the callback: indicates the action succeded and contains its return value

## Examples

You can explore different async processing options by changing the file referenced in the `script` tag in `index.html`. There are three files:

* callback.js
* promise.js
* async-await.js

They explore callbacks, promises, and async-awaits respectively.

The file named `promise-all.js` explores `Promise.all()` outside of the HTML page test harness.
```
node .\promise-all.js
```
