import {    Form    } from './form.js';
import {    Posts   } from './posts-list.js';
import {    Pagination  } from './pagination.js'

class Controller {
    constructor(root) {
        this.root = root;
        this.apiUrl = 'http://localhost:4000/';
        this.sortParams = {
            sortBy: 'id',
            order: 'desc',
            limit: 3,
            currentPage: 1,
            totalCount: 0,
          };
          this.init();
    }
    init () { 
        this.render()
        this.fetchData();
       
    }
    fetchData () {
        const {sortBy, order, limit, currentPage} = this.sortParams;
        fetch( `${this.apiUrl}posts?_sort=${sortBy}&_order=${order}&_limit=${limit}&_page=${currentPage}`)
        .then(resp => {
            const totalCount = resp.headers.get('X-Total-Count');
            const totalPages = Math.ceil(totalCount / this.sortParams.limit);
            console.log(totalPages);

           this.pagination = new Pagination(this.listWrapper, this.sortParams.currentPage, totalPages, (page) => 
                this.setPage(page));
            return resp.json();
        })
        .then (data => {
            this.data = data;
            console.log(this.data);
            
            this.createPostList();
            this.pagination.render();
        })
    }
    render() {
        this.listWrapper = document.createElement('div');
        this.listWrapper.className = 'posts-list__wrapper';

        this.form = new Form(this.root, (comment) => {
            //newList.addPost(comment);
            this.fetchData()
        });
        this.root.append(this.listWrapper)
    }
  
    deletePost (id) {
        fetch(`${this.apiUrl}posts/${id}`, {
            method: "DELETE"
        })
        .then (resp => {
            if (resp.status === 200) {
                this.fetchData()
            }
            console.log(resp)
        })
        .catch (err => {
            console.log(err)
        })
    }
    setPage (page) {
        if (typeof page !== 'number') {
            page = parseInt(page);
        }
        this.sortParams.currentPage = page;
        this.fetchData()
    }
    createPostList() {
        this.list = new Posts(this.listWrapper, this.data, (id) => {
            this.deletePost(id)
        });
    }
}
const root = document.querySelector('main');
new Controller(root)