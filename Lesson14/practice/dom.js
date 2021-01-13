import {    Item    } from "./item.js"

class ItemList {
    constructor (root) {
        this.root = root;
        this.url = 'https://boring-fe.herokuapp.com/movies'
    }
    display() {
        fetch(this.url) 
        .then (response => response.json())
        .then (data => {
                this.newDiv = document.createElement('div');
                this.newDiv.classList.add('container');

                data.forEach(item => {
                const movieItem = new Item(this.newDiv, item); 
                movieItem.createMovie()
                 this.newDiv.before(movieItem);      
                })
               
                this.root.append(this.newDiv)
        })
    }
}

let movies = new ItemList (document.querySelector('body'));
movies.display()


