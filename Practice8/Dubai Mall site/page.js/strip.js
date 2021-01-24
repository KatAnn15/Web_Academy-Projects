class Strip {
    constructor(root, data) {
        this.root = root;
        this.data = data;
    }

    createStrip () {
        const {title, id, description, bgImage} = this.data;
        this.container = document.createElement('div');
        this.container.className = `strip strip${id}`;
        this.container.style.backgroundImage =  `url(${bgImage})`;

        this.container.innerHTML =  `
        <h2 class="strip-title">${title}</h2>
        <p class="strip-description">${description}</p>
        <button class="contact-us-btn">Contact Us!</button>
        `

        this.root.append(this.container)
    }
}

export {    Strip   }