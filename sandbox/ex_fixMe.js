'use strict';

const tasks = {
    tasks: [{
        text: 'grocery shop',
        completed: true
    }, {
        text: 'clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        let stuff = [];
        
        this.tasks.forEach( element => (element.completed === false) ? stuff.push(element.text) : "" );

        return stuff;
    }
};

console.log(tasks.getTasksToDo());