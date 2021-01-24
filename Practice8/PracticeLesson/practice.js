class Ad {
    constructor(root, data) {
        this.root = root;
        this.data = data;
    }
    createPost () {
        this.wrapper = document.createElement('div');
        this.wrapper.className = 'wrapper';
        
        const {title, productUrl, description} = this.data;

        this.wrapper.innerHTML = `
        <img src="${productUrl}" alt="" class="product-img">
        <div class="product-info">
            <h2 class="product title">${title}</h2>
            <h3 class="product description">${description}</h3>
        </div>
        `
        this.root.append(this.wrapper)
    }
}

class Ads {
    constructor(root) {
        this.root = root;
        this.url = 'https://boring-fe.herokuapp.com/advertisments'
    }
    fetchData() {
        fetch(this.url)
        .then(resp => resp.json())
        .then(data => {
            this.content = document.createElement('div');
            this.content.className = 'content';

            data.forEach(item => {
                const post = new Ad(this.root, item)
                post.createPost()
                this.content.before(post)
            })
            this.root.append(this.content)
        })
    }
}

const ads = new Ads(document.querySelector('body'));
ads.fetchData()