
class Item {
    constructor (root, data) {
        this.root = root;
        this.data = data;

    }
    createMovie() {

        this.div = document.createElement('div');
                this.div.className = 'movie-item';
                const {preview, genre, title, rating, description} = this.data;

                this.info = document.createElement('div');
                this.info.className = 'movie-info';
                this.info.innerHTML = `
                <h2 class="movie-title">${title}</h2>
                    <h3 class="movie-description">${description.slice(0, 50)}</h3>
                    <button class="movie-action-btn">Buy!</button>
                `;
                this.div.insertAdjacentHTML('beforeend', `
                    <img src="${preview.high}" alt="" class="movie-img"> 
                    <h4 class="movie-label">${genre}</h4>
                    <h2 class="movie-rating">${rating}</h2>        
            `) 
            this.div.append(this.info)       
            this.root.append(this.div);

            this.div.addEventListener('mouseenter', () => {
                this.info.classList.add('expanded');
            })
            this.div.addEventListener('mouseleave', () => {
                this.info.classList.remove('expanded');
            })
    }
}

export {    Item    }