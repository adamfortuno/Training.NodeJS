class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}.`);
    }
}

class Student extends Person {
    constructor(name, level) {
        super(name);
        this.level = level;
    }
    greet() {
        console.log(`Hello ${this.name} from ${this.level}.`);
    }
}

const o1 = new Person('Adam');
const o2 = new Student('Shannon', 2);
const o3 = new Student('Murphy', 34);

o3.greet = () => console.log('Whatevaaa!');

o1.greet();
// Shows the greet method from Person.

o2.greet();
// Shows the greet method from Student.

o3.greet();
// Shows the overriden greet() method.