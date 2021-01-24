

const createItem = (parent, title, color = '#ce82ff') => {

const newDiv = document.createElement('div');
newDiv.className = 'initContainer';
const newBtn = document.createElement('button');
newBtn.className = 'openModalBtn';
const newSpan = document.createElement('span');
newSpan.style.backgroundColor = color;
const newFigure = document.createElement('figure');
newFigure.className = 'eggFigure';
const newTextElement = document.createElement('h2');
newTextElement.className = 'option__title';
newTextElement.textContent = title;

newDiv.append(newBtn);
newBtn.append(newSpan);
newSpan.append(newFigure)
newDiv.append(newTextElement);
parent.append(newDiv);
    
};

const createModal = () => {
    
    const newModal = $(".modal");
    const levelTitle = document.createElement('h2');
    levelTitle.className = 'level';
    levelTitle.textContent = 'Уровень 0/5';
    const lessonTitle = document.createElement('h2');
    lessonTitle.className = 'lesson';
    lessonTitle.textContent = 'Урок 0/3';
    const unlock = document.createElement('button');
    unlock.className = 'keyBtn';
    unlock.innerHTML = '<img class="keyImg" src="./assets/images/keyimg">'
    const actionBtnTheory = document.createElement('button');
    actionBtnTheory.className = 'actionBtn actionBtnTheory';
    actionBtnTheory.textContent = 'ТЕОРИЯ';
    const actionBtnStart = document.createElement('button');
    actionBtnStart.className = 'actionBtn actionBtnStart';
    actionBtnStart.textContent = 'СТАРТ';
    
    newModal.append(levelTitle, lessonTitle, unlock, actionBtnTheory, actionBtnStart);
    $('body').append(newModal);
    
}

const modal = document.querySelector(".modal");

const openModal = () => {
    modal.style.visibility = 'visible';
}
const closeModal = () => {
    modal.style.visibility = 'collapse';
}

const shakeImg = () => {
keyBtn.style.animation = 'shake .5s', 2000;
}
const noShake = () => {
    keyBtn.style.animation = '';
}


createItem($('.basics'), 'Основы');
createItem($('.pro'), 'Профи', ' #b9b73b');
createItem($('.master'), 'Мастер', 'black');
createItem($('.wizard'), 'Волшебник', ' #70e4d0');

createModal();

const openModalBtn = document.querySelector(".openModalBtn");
$(".openModalBtn").click(openModal);

const keyBtn = document.querySelector(".keyBtn");
keyBtn.addEventListener('mouseenter', shakeImg);
keyBtn.addEventListener('mouseleave', noShake);

$(".actionBtn").click(closeModal);



