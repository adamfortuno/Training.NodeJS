console.log('Inside promise.js');

let posts = [
    { id : 1, title : "Set It on Fire", body : "stuff..." },
    { id : 2, title : "Naming Park Benches", body : "things...." },
    { id : 3, title : "Gross Things", body : "more things..." },
    { id : 4, title : "Why the Question Mark", body : "wow, stuff..." }
];

const getNewPostId = (posts) => {
    let max_value = 0;

    posts.forEach((post) => {
        max_value = (max_value > post.id) ? max_value : post.id;
    });

    max_value++;
    return max_value;
}

function getPosts() {
    setTimeout(() => {
        let output = '<h1>Posts</h1>';

        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const err = false;
            
            if (err) {
                reject('Error: Something bad happened');
            } else {
                resolve();
            }
        }, 2000);
    })
}

const id = getNewPostId(posts);
const post = { id : id, title : 'Cat Food, Un-Natural Flavors', body : 'Cat, bla...'};

createPost(post)
    .then(getPosts, console.log('Failed'))
    .catch( (err) => { console.log(err) });