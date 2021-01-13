export class Post {
    constructor(root, data, onDeleteCallback) {
        this.root = root;
        this.data = data;
        this.onDeleteCallback = onDeleteCallback;
        this.renderPost()
    }
     
    renderPost () {
        let {id,title = 'Author did not add a title', note, img = 'images/cover.png', description = 'Author did not add a description'} = this.data;

        this.div = document.createElement('div');
        this.div.className = `post__item item_${id}`;

        this.deleteBtn = document.createElement('button');
        this.deleteBtn.className = 'form__delete-item-btn';
        
        this.deleteBtn.addEventListener('click', () => {
            this.onDeleteCallback(id);
        });

        this.span = document.createElement('span')

        this.deleteBtn.append(this.span);

        this.div.innerHTML = `
        <img src=${img} alt="" class="post__cover-img">
        <h2 class="post__title">${title}</h2>
        <h3 class="pos__note">${note.slice(0, 50)}</h3>
        <h4 class="post__description">${description}</h4>
        `
        this.div.append(this.deleteBtn);
        this.root.append(this.div)
    }
}