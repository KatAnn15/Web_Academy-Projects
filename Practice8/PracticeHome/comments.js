import {    Form    } from './form.js';
import {    Post    } from './post.js';



class Comments {
    constructor(root) {
        this.root = root;
        this.url = 'http://localhost:3000/posts'
    }
    fetchData () {
        fetch(this.url) 
        .then(resp => resp.json())
        .then(data => {
            this.comments = document.createElement('div');
            this.comments.className = 'comments-list';
            data.forEach(item => {
                const post = new Post(this.comments, item);
                post.createPost();
                this.comments.after(post)
            })
            this.root.append(this.comments)
        })
        .catch (err => {
            console.log('Could not fetch: ', err)
        })
    }
    
    addComment () {
        const post = new Post(this.comments, newComment);
        post.createPost();
        this.comments.after(post)
    }
}

let  comments = new Comments(document.querySelector('.content-wrapper'))
comments.fetchData();

const form = new Form(document.querySelector('.content-wrapper'),  (newComment) => {
    console.log(newComment)
    comments.addComment(newComment)
});
form.createForm();




