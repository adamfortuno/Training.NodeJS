const thing = require('./../app.js');

test("should default to 'a'", () => {
    let t = thing.foo();
    expect(t).toBe('a');
});

test("should return parameter", () => {
    let x = 'b';
    let t = thing.foo(x);
    expect(t).toBe(x);
});

test("should return 2", () => {
    let return_value = thing.bar();
    expect(return_value).toBe(2);
});