class Form {
    constructor(root, onSuccessRequestCallback) {
        this.root = root;
        this.onSuccessRequestCallback = onSuccessRequestCallback;
    }

    createForm () {
        this.div = document.createElement('div');
        this.div.className = 'form-wrapper';

        this.form = document.createElement('form');
        this.form.className = 'contact-form';

        this.email = document.createElement('input');
        this.email.type = 'email';
        this.email.id = 'email';
        this.email.placeholder = 'Please, enter your email';

        this.message = document.createElement('textarea');
        this.message.className = 'message';
        this.message.id = 'message';
        this.message.placeholder ='Please, insert your message';

        this.button = document.createElement('button');
        this.button.className = 'submit-btn';
        this.button.type = 'submit';
        this.button.textContent = 'Submit';

        this.div.append(this.form)
        this.form.append(this.email, this.message, this.button);
        this.root.append(this.div);
    

        this.form.addEventListener('submit', (e) => {
            e.defaultPrevented;
            
            const values = {
            email: this.email.value,
            message: this.message.value
        }
            fetch('http://localhost:3000/submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            .then (resp => resp.json())
            .then(data => {
                this.onSuccessRequestCallback(data);
            })
            .catch(err => {
                console.log("Error: ", err)
            })
        })
    }

    closeForm() {
        this.button.addEventListener ('click', () => {
            this.div.style.display = 'none';
        })
    }
    formActions() {
        this.createForm();
        this.closeForm();
    }
}

export {    Form    }