const container = document.createElement('div');
container.className = 'container';
container.setAttribute ('style', 'max-width: 670px; border-radius: 20px; margin: 100px auto;  background-color: black;  display: flex; flex-wrap: wrap')
$(".oldDiv").append(container);

const createLamp = (root, color = 'red', size = 50,  time = 500) => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    const figure = document.createElement('figure');
    figure.className = 'figure';
    figure.setAttribute('style', 'border-radius: 50%; border: 2px solid #4D4646')
    figure.style.height = `${size}px`;
    figure.style.width = `${size}px`;
    circle.append(figure);
    root.append(circle);
    let count = 0;
    figure.style.backgroundColor = color;
     const  changeColor = () => {
        count++;
        return  count % 2 === 0 ?
             figure.style.backgroundColor = color : 
             count % 10 === 3 ? 
                figure.style.backgroundColor = 'blue' : 
                count % 10 === 7 ? 
                    figure.style.backgroundColor = 'red' :
                      figure.style.backgroundColor = 'transparent';
       };     
       setInterval (changeColor, time)
    }
const surprise = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

 const christmasLights = (root, count = 20, timer = 1000) => {
    const colors = [
    '#800000',
    `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
     '#A52A2A',
     '#FFA500', 
     '#DC143C', 
     `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
     '#FFD700', 
    '#DAA520', 
    ' #FF7F50',  
    `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
     ] 
     let number = 0;
     createLamp(root, color = colors[0]);
        let  addCircle = setInterval (() => {
            number++;   
            createLamp(root, color = colors[number % 10]);
            return number > count - 2 ? clearInterval(addCircle) : null;  
        }, timer)
 };

christmasLights($('.container'));


const createText = (root, title, content) => {

    const element = document.createElement('div');
    element.className = 'expandable';
    element.setAttribute ('style',  'max-width: 670px; margin: 30px auto; text-align: center;');

    const heading = document.createElement('button');
    heading.className = 'name';
    heading.setAttribute ('style', 'width: 670px; height: 50px; text-align: left; padding-left: 30px; border-radius: 10px 10px 0 0; font-size: 16px; font-weight: 900; border: 1px solid #6495ED; background-color: #4583a6; color: white');
    heading.textContent = title;
    const description = document.createElement ('p');
    description.className = 'description';
    description.innerHTML = content;

    element.append(heading, description);
    root.append(element);
}

const collapsiblePost = (root, title, content) => {
    createText(root, title, content);  
}

const importable = [
    {
        'name' : 'Dubai',
        'description':  `<p>Marvel at the wonders of nature up-close, with more than 33,000 animals to admire</p>

                                    <img src='./assets/images/underwater' style="width: 100%; height: 300px"></img>`
    },
   {
       'name': 'Philippines',
       'description': `<p>With more than 7,000 islands consisting of rice paddies, volcanos, mega-metropolises, 
                                world-class surf spots, and endemic wildlife, the Philippines is one of the most dazzling and diverse countries in all of Asia. 
                                Not to mention, it’s home to some of the world’s best beaches, too.</p>

                                <img src='./assets/images/mountains' style="width: 100%; height: 300px"></img>`
   },
   {
    'name': 'Hawaii',
    'description': `<p>The word "vacation" brings to mind sunbathing on a balmy beach, taking dips in a dazzling blue ocean, 
                            napping under coconut trees—in other words, Hawaii. 
                            But travelers that can pull themselves away from the 50th state's stunning beaches will find so much more. 
                            From volcanic landscapes to hidden waterfalls and epic expeditions, a Hawaiian getaway can go in a dozen different directions. 
                             Each of the six major islands–Kauai, Oahu, Molokai, Lanai, Maui,
                            and the island of Hawaii–has its own distinct personality and its own opportunities for adventure, 
                            dining, culture, and relaxation.</p>

                            <img src='./assets/images/hawaii' style="width: 100%; height: 300px"></img>`
}
]

const multipleItems = (max) => {
    for (let i = 0; i < max; ++i) {
    collapsiblePost(document.querySelector('.newDiv'), importable[i].name, importable[i].description);
    }
}
const mainElement = document.querySelectorAll('.name');

const onclick = () => {
     const mainElement = document.querySelectorAll('.name');
    console.log(mainElement)
    
    mainElement.forEach((item, index) => item.addEventListener('click', ()=> {
         for (i = 0; i < importable.length; i++) {
        document.querySelectorAll('.description')[index].classList.toggle ('expand');
        }
    }));
}
multipleItems(importable.length);
onclick()






