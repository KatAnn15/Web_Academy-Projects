const exclusiveOffers = [
    {
        'imageSource': './Assets/slides/strip.png',
        'id': 'fashion',
        'type': 'half-bg',
        'bg': '50%',
        'category': 'FASHION AVENUE',
        'title': 'Redefining Luxury',
        'description': 'More than 200 of the most covetable luxury brands at Fashion Avenue ready for you to discover.',
        'buttonLabel': 'EXPLORE MORE'
    },
    {
        'imageSource': './Assets/slides/strip2.png',
        'id': 'entertainment',
        'type': 'full-bg',
        'bg': '100%',
        'category': 'ENTERTAIN',
        'title': 'Dubai Aquarium & Underwater Zoo',
        'description': 'Marvel at the wonders of nature up-close, with more than 33,000 animals to admire..',
        'buttonLabel': 'EXPLORE MORE',
        'secondBtn': 'Discover Entertainment'
    },
    {
        'imageSource': './Assets/slides/dining.bg',
        'id': 'dining',
        'type': 'full-bg',
        'bg': '100%',
        'category': 'DINE',
        'title': 'Downtown Eats',
        'description': " ",
        'buttonLabel': 'EXPLORE MORE',
        'secondBtn': 'Discover Dining'
    },
    {
        'imageSource': './Assets/slides/hotel.bg',
        'id': 'hotels',
        'type': 'full-bg',
        'bg': '100%',
        'category': 'STAY',
        'title': 'Unforgettable Stay',
        'description': " ",
        'buttonLabel': 'EXPLORE MORE',
        'secondBtn': 'Discover Dining'
    }
]

const moreBtn = document.querySelectorAll('.learn-more-btn');

const createStrip = (root, size = '50%', itemIndex = 0) => {
    const stripBody = document.createElement('div');
    stripBody.className = `strip ${exclusiveOffers[itemIndex].type} ${exclusiveOffers[itemIndex].id}`;

    const stripImg = document.createElement('img');
    stripImg.className = 'strip__img';
    stripImg.style.width = size;
    stripImg.style.height = '55vh';
    stripImg.setAttribute('src', `${exclusiveOffers[itemIndex].imageSource}`);

    const stripInfo = document.createElement('div');
    stripInfo.className = 'strip__info';

    const stripCategory = document.createElement('h3');
    stripCategory.className = 'strip__category';
    stripCategory.innerHTML = exclusiveOffers[itemIndex].category;
    
    const stripTitle = document.createElement('h2');
    stripTitle.className = 'strip__title';
    stripTitle.innerHTML = exclusiveOffers[itemIndex].title;

    const stripDescription = document.createElement('h3');
    stripDescription.className = 'strip__description';
    stripDescription.innerHTML = exclusiveOffers[itemIndex].description;

    stripInfo.append(stripCategory, stripTitle, stripDescription)
    stripBody.append(stripImg, stripInfo)
    root.append(stripBody);    


    if (exclusiveOffers[itemIndex].secondBtn) {
        const actionBar = document.createElement('div');
        actionBar.className = 'action-bar';
        const stripBtn = document.createElement('button');
        stripBtn.className = 'strip__action-btn';
        stripBtn.innerHTML = exclusiveOffers[itemIndex].buttonLabel;

        const secondStripBtn = document.createElement('button');
        secondStripBtn.className = 'strip__action-btn discover';
         secondStripBtn.innerHTML = exclusiveOffers[itemIndex].secondBtn;

        actionBar.append(stripBtn, secondStripBtn)
        stripInfo.append(actionBar);
    } else {
        const stripBtn = document.createElement('button');
        stripBtn.className = 'strip__action-btn explore-more';
        stripBtn.innerHTML = exclusiveOffers[itemIndex].buttonLabel;
        
        stripInfo.append(stripBtn)
    }
}


const createItem = () => {
    exclusiveOffers.forEach((item, index) => {
        createStrip(document.querySelector('main'), exclusiveOffers[index].bg, index);
        if (exclusiveOffers[index].description === " ") {
            document.querySelectorAll('.strip__info')[index].style.maxHeight = '300px';
        }
            console.log(exclusiveOffers[index].title);
    });
}
createItem();
