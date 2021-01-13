import {    Post  } from './post.js';
import {    Form    } from './form.js';

class Submissions {
    constructor (root) {
        this.root = root;
        this.url = 'http://localhost:3000/submissions';
    }

    fetchData () {
        fetch (this.url)
        .then (resp => resp.json())
        .then (data => {
            this.list = document.createElement('div');
            this.list.className = 'submissions-list';

            data.forEach(object => {
                const newSubmission = new Post(this.list, object);
                newSubmission.displaySubmission();
                this.list.after(newSubmission)
            })
            this.root.append(this.list)
        })
        .catch (err => console.log(err))
    }
    
    releaseData() {
        data.forEach(() => {
            const subm = new Post(this.list, newRelease);
            subm.displaySubmission();
            this.list.after(subm)
    })
  }
}

export {    Submissions     }

const oneSubmission = new Submissions(document.querySelector('.content'));
oneSubmission.fetchData();

const form = new Form(document.querySelector('.content'), (newRelease) => {
    oneSubmission.releaseData(newRelease);
});

form.formActions();


