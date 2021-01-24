export class Pagination {
    constructor(root, currentPage, totalPages, onChange) {
        this.root = root;
        this.totalPages = totalPages;
        this.onChange = onChange;
        this.currentPage = currentPage;
    }
    render() {
        const thisElement = this.root.querySelector('.pagination');
        this.domElement = thisElement ? thisElement :  document.createElement('div');
        this.domElement.className = 'pagination';
        this.domElement.innerHTML = " ";
        for (let i = 1; i <= this.totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            if (i === this.currentPage) {
                button.style.color = 'red';
            }
      
            button.addEventListener('click', () => {
                this.onChange(i);
            })     
             this.domElement.append(button);
        }
        this.root.append(this.domElement)
    }
}