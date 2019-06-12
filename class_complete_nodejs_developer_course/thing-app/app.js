const foo = (v = 'a') => {
    return v;
}

const bar = () => {
    return 2;
}

module.exports.foo = foo;
module.exports.bar = bar;