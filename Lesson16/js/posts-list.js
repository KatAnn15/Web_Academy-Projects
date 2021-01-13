import {    Post    } from './post.js'
export class Posts {
    constructor (root, data, onItemDelete) {
        this.root = root;
        this.data = data;
        this.onItemDelete = onItemDelete;
        this.addList()
    }
    addList () {
        this.root.innerHTML = " ";
            this.list = document.createElement('div');
            this.list.className = 'posts-list';
            this.data.forEach(post => {
                this.addPost(post)
            })
            this.root.append(this.list)
    }
    addPost (newPost) {
        new Post(this.list, newPost, this.onItemDelete);
    }
}