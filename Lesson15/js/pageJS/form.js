export class Form {
     constructor (root, url, onSuccessCallback) {
         this.root = root;
         this.url = url;
         this.onSuccessCallback = onSuccessCallback;
         this.init()
     }

     init() {
         this.createForm()
     }

     createForm() {
         this.form = document.createElement('form');
         this.form.classList.add = 'posts-form';

         this.form.innerHTML = `
          <input type="text" class="form__title" name="title" placeholder="Enter your post title here"/>
         <input type="text" class="form__name" name="note" placeholder="Enter your notes here"/> 
         <textarea class="form__description" name="description"> </textarea>
         <input class="form__cover-img" type="file" name="img"/>
         <div class="form__action-bar">
         <button class="form__action-btn btn_submit" type="submit">Submit</button>
         <button class="form__action-btn btn_reset" type="reset">Reset</button>
         </div>
         `  
         this.form.addEventListener('submit', (e) => this.submitForm(e))
        this.root.append(this.form)
     
     }

     submitForm (e) {
        e.preventDefault();
            const formData = new FormData(this.form);
            fetch(this.url, {
                method: "POST",
                body: formData,
            })
            .then (resp => resp.json())
            .then(data => {
                console.log('Submitted!', data);
                this.onSuccessCallback(data)
            })
            .then (() => {
                this.form.reset()
            })
            .catch(err => {
                console.log(err)
            })
     }
 }
