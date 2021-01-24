import {    Form    } from './form.js';
import {    PostList    } from './postList.js';
import {    Pagination  } from './pagination.js'

const apiURL = 'http://localhost:4000';

class CommentsWidget {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = '';
        this.sortParams = {
            'sort': 'id',
            'order': 'desc',
            'limit': 4,
            'currentPage': 1,
            'totalCount': 0
        };
        this.init();
    }

    init () {
        this.render();
        this.fetchData();
    }
    render() {
        this.commentsWrapper = document.createElement('div');
        this.commentsWrapper.className = 'comments-widget__wrapper';

        this.listWrapper = document.createElement('div');

        this.formEl = new Form(this.commentsWrapper, `${apiURL}/advertisments`, (responseData) => {
            this.list.addPost(responseData)
        });
        this.commentsWrapper.append(this.listWrapper);
        this.root.append(this.commentsWrapper);
    }
    setPage (page) {
        if (typeof 'page' !== 'number') {
            page = parseInt(page)
        }
        this.sortParams.currentPage = page;
        this.fetchData()
    }

    fetchData() {
        const {sort, order, limit, currentPage} = this.sortParams;
        fetch (`${apiURL}/advertisments/?_sort=${sort}&_order=${order}&_limit=${limit}&_page=${currentPage}`)
        .then (resp =>  {
            const totalCount = resp.headers.get('X-Total-Count');
            const totalPages = Math.ceil (totalCount / this.sortParams.limit);

            this.pagination = new Pagination(this.commentsWrapper, totalPages, 
                (page) => {
                this.setPage(page)
            });

            this.pagination.render();
            return resp.json()
        })
        .then (comments => {
            this.comments = comments;
            this.renderImg();
            this.renderItems();
            })
            
    }
    renderImg () {
            this.comments.forEach(comment => {
            comment.img = `${apiURL}/${comment.img}`;
            })
    }
    renderItems () {
        this.list = new PostList(this.listWrapper, this.comments, this.deleteComment);
        ( id) => this.deleteComment ( id);
    }
    deleteComment (id) {
        console.log('Deleted! ', id);
        fetch (`${apiURL}/advertisments/${id}`, {
            method: "DELETE"
        })
        .then (resp => () => {
            if (resp.status === 200) {
                this.fetchData();
                }
                this.renderItems;
            console.log(resp)
    })
  }
}

new CommentsWidget(document.querySelector ('main'))

