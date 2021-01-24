
export class Form {
    constructor(root, onSuccessSubmit) {
        this.root = root;
        this.onSuccessSubmit = onSuccessSubmit;
        this.apiUrl = 'http://localhost:4000/';
        this.init();
    }
    init() {
        this.render()
    }
    render() {
        this.formElement = document.createElement('form');
        this.formElement.className = 'submissions-form';
        
        this.formElement.innerHTML = `
        <input type="text" class="form__input form__input_name" name="name" placeholder="Enter your name"/>
        <input type="text" class="form__input form__input_title" name="title" placeholder="Enter the title"/>
        <textarea name="" id="" cols="30" rows="10" class="form__input form__input_description" name="description" placeholder="Enter the description"></textarea>
        <input type="file" class="form__input form__input_image" name="image"/>
        <button class="form__submit-btn">Submit</button>
        <button class="form__reset-btn">Reset</button>
        `
        this.formElement.addEventListener('submit', (e) => this.submit(e));

        this.root.append(this.formElement)
    }

    submit(e) {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const  year = date.getFullYear();
    
       e.preventDefault();
       const formData = new FormData(this.formElement);
       formData.append("date", `${day}/${month + 1}/${year}`)
       fetch(`${this.apiUrl}posts`, {
           method: "POST",
           body: formData
       })
       .then(resp => resp.json())
       .then (data => {
            console.log(data);
            this.onSuccessSubmit(data);
       })
       .catch(err => {
           console.log(err)
       })
    }
}