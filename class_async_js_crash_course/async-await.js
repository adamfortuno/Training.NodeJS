console.log('Running async-await.js');

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

// This is a more elegant way of handling a promise.
// You can only call await in a function marked `async`
// on a function that returns a promise.
async function init() {
    const id = getNewPostId(posts);
    const post = { id : id, title : 'Cat Food, Un-Natural Flavors', body : 'Cat, bla...'};

    await createPost(post);
    getPosts();
}

init();