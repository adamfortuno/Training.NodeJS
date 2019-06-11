console.log('Inside callbacks.js')

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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

const id = getNewPostId(posts);
const post = { id : id, title : 'Cat Food, Un-Natural Flavors', body : 'Cat, bla...'};
createPost(post, getPosts);