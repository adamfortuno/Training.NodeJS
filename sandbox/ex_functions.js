this.author = 'Adam F';

const foo = {
    me: "foo",
    // References the object that contains it
    f1: function() { console.log(this); },
    // References the session that called it
    f2: () => { console.log(this); },
}

this.author = 'Adam Fortuno';

foo.f1();
foo.f2();