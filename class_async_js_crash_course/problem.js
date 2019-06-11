console.log('Inside problem.js');

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

function createPost(title, body, callback) {
    const id = getNewPostId(posts);
    const post = { id : id, title : title, body : body};
    
    setTimeout(() => {
        posts.push(post);
        if (callback) { callback(); }
    }, 2000);
}

createPost('Fishing Is Not to Fish, Kidding Is to Kids', 'things and stuff...');
getPosts();