class Post {
    constructor (root, data) {
        this.root = root;
        this.data = data;
    }
    displaySubmission () {
        const {id, email, message} = this.data;

        this.submission = document.createElement('div');
        this.submission.className = 'submission';
        this.submission.id = id;

        this.deleteBtn = document.createElement('button');
        this.deleteBtn.className = 'delete-post';
       

        this.deleteBtn.addEventListener('click', () => {
            let id = this.submission.id;
        
            fetch(`http://localhost:3000/submissions/${id}`, {
                method: 'DELETE',
            }).then (resp => {
                return resp.json()
            })
            .then (data => data)
        })

        this.submission.innerHTML = `
          <img src="./assets/images/member.png" class="member-img">
            <h3 class="subscriber">${email}</h3>
            <h4 class="submission-content">${message.slice(0, 100)}</h4>
        `
        this.submission.append(this.deleteBtn)
        this.root.append(this.submission)
    }
}

export {    Post    };