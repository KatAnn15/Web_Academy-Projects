export class Pagination {
    constructor(root, totalPages, onChange) {
        this.root = root;
        this.totalPages = totalPages;
        this.onChange = onChange;
    }
    render() {
        const thisElement = this.root.querySelector('.pagination');
        this.domElement = thisElement ? thisElement :  document.createElement('div');
        this.domElement.className = 'pagination';
        this.domElement.innerHTML = " ";
        for (let i = 0; i < this.totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i + 1;
            this.domElement.append(button);
            button.addEventListener('click', () => {
                this.onChange(i + 1);
            })
        }
        this.root.append(this.domElement)
    }
}