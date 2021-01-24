import {    Strip   } from './strip.js';


class Strips {
    constructor(root) {
        this.root = root;
        this.url = 'http://localhost:3000/strips';
    }

    fetchData() {
        fetch(this.url)
        .then (resp => resp.json())
        .then (data => { 
            data.forEach(item => {
            const strip = new Strip(this.root, item);
            console.log(item)
            strip.createStrip();
        })
    })
        .catch((err) => {
            console.log('Error:', err)
        })
    }
}


const strip = new Strips(document.querySelector('.content'));
strip.fetchData();

window.onload = function accessDOM () {
    const openLightbox = () => {
        document.querySelector('.contact-us-btn').addEventListener('click', () => {
            document.querySelector('.form-wrapper').style.display = 'flex';
        })
    }
    openLightbox();
}


