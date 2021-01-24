import {    Post    } from './post.js';

export class PostList {
    constructor(root, data, onItemDelete) {
        this.root = root;
        this.data = data;
        this.onItemDelete =  onItemDelete;
        this.fetchPosts();
    }

    fetchPosts() {
            this.container = document.createElement('div');
            this.container.className = 'posts-list__container';

            for (let comment of this.data) {
                this.addPost(comment)
            }
            this.root.append(this.container)
    }

    addPost (comment) {
        new Post(this.container, comment, this.onItemDelete);   
    }
}

