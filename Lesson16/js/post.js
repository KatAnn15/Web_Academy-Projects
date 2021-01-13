export class Post {
    constructor(root, data, onItemDelete) {
        this.root = root;
        this.data = data;
        this.onItemDelete = onItemDelete;
        this.imgUrl = 'assets/ads-box-server-master (1)/public/';
        this.apiUrl = 'http://localhost:4000/';
        this.renderPost()
    }
    renderPost () {
            const {date, name = 'This author did not add a name', title = 'This author did not add a title', description = 'This author did not add a description', image = 'images/default-image.png', authorImage = 'images/author.png', id} = this.data;

            this.post = document.createElement('div');
            this.post.className = `post-list__post-item post-item_${id}`;

            this.post.innerHTML = `
            <div class="post-item__post-data">
            <img src="${this.imgUrl}${authorImage}" alt="" class="post__author-img"/>
            <div class="post-data__text-content">
            <h3 class="post__author-name">${name}</h3>
            <h2 class="post-item__post-date">Posted on ${date}</h2>
            </div>
            </div>
            <img src="${this.imgUrl}${image}" alt="" class="post__img"/>
            <h2 class="post__title">${title}</h2>
            <h4 class="post__description">${description.slice(0, 100)}</h4>
            `

            this.deleteBtn = document.createElement('button');
            this.deleteBtn.className = 'post-item__delete-btn';
            this.deleteBtn.innerHTML = '&times';
            this.deleteBtn.addEventListener('click', () => {
                this.onItemDelete(id)
            })

            this.date = document.createElement('h2');
            this.date.className = 'post-item__post-date';

            this.post.append(this.deleteBtn);
            this.root.append(this.post);
    }
}