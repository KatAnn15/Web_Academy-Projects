class Post {
    constructor (root, data) {
        this.root = root;
        this.data = data;
    }

    createAuthor() {
        this.container = document.createElement('div');
        this.container.className = 'post-container';

        const {avatarUrl = "https://image.freepik.com/free-vector/golden-modern-happy-new-year-background_1361-3213.jpg", author = "Anon"} = this.data;

        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();

        this.authorDetails = document.createElement('div');
        this.authorDetails.className = 'post__author-details';

        this.authorDetails.innerHTML = `
            <img class="author-img" src=${avatarUrl}></img>
        <h2 class="author-name">${author} <br><span>${year}/${month}/${day}</span></h2>  
        `
    }
    displayContent () {
        const {id, title, content} = this.data;

        this.container.innerHTML = `
        <div class="post-info post${id}">
        <img src="./assets/images/postCover.jpeg" class="post-img">
            <h2 class="post-title">${title}</h2>
            <h3 class="post-content">${content.slice(0, 150)}</h3>
        </div>
        `
        this.container.prepend(this.authorDetails)
        this.root.append(this.container)
    }
    createPost() {
        this.createAuthor();
        this.displayContent();
    }
}

export {    Post    }