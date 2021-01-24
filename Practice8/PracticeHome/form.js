class Form {
    constructor (root, onSuccessSubmitCallback) {
        this.root = root;
        this.onSuccessSubmitCallback = onSuccessSubmitCallback;
    }

    createForm() {
        this.form = document.createElement('form');
        this.form.className = 'comments-form';

        this.authorName = document.createElement('input');
        this.authorName.className = 'author-name'
        this.authorName.type = 'text';
        this.authorName.id = 'name';
        this.authorName.placeholder = 'Please, enter your name';  
        
        this.input = document.createElement('textarea');
        this.input.className = 'post-input'
        this.input.id = 'comment';
        this.input.placeholder = 'Please, write your post body';

        this.title = document.createElement('input');
        this.title.className = 'post-title'
        this.title.type = 'text';
        this.title.id = 'text';
        this.title.placeholder = 'Please, enter the post title';      

        this.button = document.createElement('button');
        this.button.className = 'submit-btn';
        this.button.textContent = 'Submit';

        this.form.addEventListener('submit', e => {
            e.preventDefault()
            const requestData = {
               title: this.title.value,
               content: this.input.value,
               author: this.authorName.value
            }
            console.log(requestData)
            fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            }).then(resp => {
                return resp.json()
            }).then((data) => {
                console.log(data)
                this.onSuccessSubmitCallback(data)
            }).catch (err => {
                console.log(err)
            })
        })
        this.form.append(this.authorName, this.title, this.input, this.button);
        this.root.prepend(this.form)
    }
}


export {    Form    }