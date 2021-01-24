const pages = [
    "what's new",
    'Shop',
    'Dine',
    'Stay',
    'Entertain',
    'Plan your visit',
    'Services'
];
const bannerOffers = [
    'Fashion Avenue',
    'Offers',
    'Events'
];
const slides = [
    './Assets/slides/slide1',
    './Assets/slides/slide2',
    './Assets/slides/slide3',
    './Assets/slides/slide4',
    './Assets/slides/slide5'
]

const createHeader = (root, logoContent = 'Place your logo here') => {
    const header = document.createElement('div');
    header.className = 'header__bar';

    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.innerHTML = logoContent;

    const navBar = document.createElement('div');
    navBar.className = 'header__navbar';

    const menu = document.createElement('ul');
    menu.className = 'menu__list';

    const banner = document.createElement('div');
    banner.className = 'banner';
    
    const bannerInfo = document.createElement('ul');
    bannerInfo.className = 'banner__content';

    navBar.append(menu);
    banner.append(bannerInfo)
    header.append(logo, navBar, banner);
    root.append(header);

    for (let i = 0; i < pages.length; i++) {
       const li =  document.createElement('li');
       const a = document.createElement('a');
       li.className = 'menu__item';
       a.setAttribute('href', '#')
       a.innerHTML = pages[i];

       li.append(a);
       menu.appendChild(li);
    }
    for (let i = 0; i < bannerOffers.length; i++) {
        const li =  document.createElement('li');
        const a = document.createElement('a');
        li.className = 'banner__item';
        a.setAttribute('href', '#')
        a.innerHTML = bannerOffers[i];
 
        li.append(a);
        bannerInfo.appendChild(li);
     }
};

createHeader(document.querySelector('header'));

//---------------------------------------------------------------------------------------------------------------------

const createBody = (size = '100vw') => {
    const mainSlider = document.createElement('div');
    mainSlider.className = 'slider';

    const slidesList = document.createElement('ul');
    slidesList.className = 'slider__list';
    slidesList.style.padding = '0';

    for (let i = 0; i < slides.length; i++) {
        const li = document.createElement('li');
        li.className = `slide__item slide_${i}`
        li.style.width = size;
        li.style.height = '90vh';
         let transformage = (i) * 100;
        li.style.transform = `translateX(-${transformage}%)`;
        const slideImage = document.createElement('img');
        slideImage.setAttribute('src', slides[i]);
        slideImage.style.width = '100%';
        slideImage.style.height = '100%';
        li.append(slideImage);
        slidesList.append(li);
    }
    document.querySelector('main').append(slidesList);
}
createBody();
document.querySelector('.slide_0').style.opacity = 1;


let index = 0;
const thisSlide = document.querySelectorAll('.slide__item');
//console.log(thisSlide[0])

const showSlide = () => {
    thisSlide[index].style.opacity = 1;
}
const increaseIndex = () => {
    if (index  + 1 < thisSlide.length) {
        index += 1;
    } else {
    index  = 0;
    }
} 

const hideSlide = () => {
    thisSlide[index].style.opacity = 0;
}

const showSlider = () => {
    hideSlide();
    increaseIndex();
    showSlide();
}

let intervalId;
const startInterval = () => {
    intervalId = setInterval(showSlider, 5000);
}
startInterval();

const stopInterval = () => {
    clearInterval (intervalId);
}

document.querySelector('.slider__list').addEventListener('mouseenter', stopInterval);
document.querySelector('.slider__list').addEventListener('mouseleave', startInterval);

//----------------

const slideInformation = [
    {
        'name': 'Make Memories with Us',
        'description': 'Celebrate Emaar New Year’s Eve 2021 (NYE2021) with us at The Dubai Mall Waterfront Promenade for an unforgettable dining experience, with extraordinary views of Burj Khalifa’s world renowned fireworks display, animation and light & laser show.',
        'timing': '<img src="./Assets/slides/clock.png"><div clas="wrapper">Open Today <br> <span> 10AM - 12AM</span></div>', 
        'location': '<img src="./Assets/slides/location.png"><div class="wrapper">PLAN YOUR VISIT <br> <span>View Mall Map</span></div>'
    },
    {
        'name': 'Be a Millionnaire',
        'description': 'Visit The Dubai Mall from 29 Nov to 27 Dec 2020 and be in with a chance to WIN a Million U By Emaar points. Simply visit the Emirates NBD Kiosk at Grand Atrium to get in on all the action. You can also win more points and daily prizes up to AED 10,000!',
        'timing': '<img src="./Assets/slides/clock.png"><div clas="wrapper">Open Today <br> <span> 10AM - 12AM</span></div>',
        'location': '<img src="./Assets/slides/location.png"><div class="wrapper">PLAN YOUR VISIT <br> <span>View Mall Map</span></div>'
    },
    {
        'name': 'Celebrate Skywards Daily',
        'description': 'In celebration of the UAE entering its 50th year as a nation, get a chance to win 50,000 Skywards Miles every day when you shop at The Dubai Mall this Dubai Shopping Festival.',
        'timing': '<img src="./Assets/slides/clock.png"><div clas="wrapper">Open Today <br> <span> 10AM - 12AM</span></div>',
        'location': '<img src="./Assets/slides/location.png"><div class="wrapper">PLAN YOUR VISIT <br> <span>View Mall Map</span></div>'
    },
    {
        'name': 'Breakfast Destinations in the City',
        'description': 'Start your day at The Dubai Mall with over 80 delicious breakfast brands to choose from, under one roof. Explore the biggest and best variety of restaurants and cafes catering for Breakfast from 8am.',
        'timing': '<img src="./Assets/slides/clock.png"><div clas="wrapper">Open Today <br> <span> 10AM - 12AM</span></div>',
        'location': '<img src="./Assets/slides/location.png"><div class="wrapper">PLAN YOUR VISIT <br> <span>View Mall Map</span></div>'
    },
    {
        'name': 'You Show We Deliver',
        'description': 'Shoppers at Fashion Avenue at The Dubai Mall enjoy extended payment options with 0% interest when they shop with their Emirates NBD credit cards. This exclusive offer, allows you to make payments in installments over 3 or 6 months. ',
        'timing': '<img src="./Assets/slides/clock.png"><div clas="wrapper">Open Today <br> <span> 10AM - 12AM</span></div>',
        'location': '<img src="./Assets/slides/location.png"><div class="wrapper">PLAN YOUR VISIT <br> <span>View Mall Map</span></div>'
    },
]

const createSliderText = () => {
    const container = document.querySelectorAll('.slide__item');

    container.forEach((item, index) => {
        const sliderInfo = document.createElement ('div');
        sliderInfo.className = 'slider__content';
        const title = document.createElement('h1');
        title.className = 'slider__title';
        title.innerHTML = slideInformation[index].name;
        const details = document.createElement('ul');
        details.className = 'slider__info';
        const info = document.createElement('li');
        info.className = 'slider__description';
        info.innerHTML = slideInformation[index].description;
        const time = document.createElement('li');
        time.className = 'slider__timing';
        time.innerHTML = slideInformation[index].timing;
        const location = document.createElement('li');
        location.className = 'slider__location';
        location.innerHTML = slideInformation[index].location;
        const moreBtn = document.createElement('button');
        moreBtn.className = 'learn-more-btn';
        moreBtn.textContent = 'LEARN MORE';        
        details.append(info, time, location)
        sliderInfo.append(title, details, moreBtn)
        item.append(sliderInfo)
    })
    document.querySelectorAll('.learn-more-btn').forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.setAttribute('style', 'background-color: white; color: black; cursor: pointer;');
            console.log('hovered!')
        })
    })
}
createSliderText();

