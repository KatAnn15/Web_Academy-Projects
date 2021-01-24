//Home work lights

const  lights = document.querySelectorAll('.lightsItem');
const widget = document.querySelector('.widget');
const startIntervalBtn = document.querySelector('.startIntervalBtn');
const stopIntervalBtn = document.querySelector('.stopIntervalBtn');
let body = document.querySelector("body");
let IntervalSet;
let IntervalLightIndex = 0;

const showColor = () => {
    lights[IntervalLightIndex].classList.toggle('active');
};
const removeColor = () => {
    lights[IntervalLightIndex].classList.remove('active');
};

const increaseIndex = () => {
    if (IntervalLightIndex + 1 < lights.length) {
        IntervalLightIndex += 1;
    } else {
        IntervalLightIndex = 0;
    }
    console.log("Index increased!");
};
const showNext = () => {
removeColor();
increaseIndex();
showColor();
}
const showNextColor = () => {
    IntervalSet = setInterval(showNext, 2000);
}
const stopInterval = () => {
    clearInterval(IntervalSet);
}


showNextColor();

startIntervalBtn.addEventListener('click', showNextColor);
stopIntervalBtn.addEventListener('click', stopInterval);


const lightOn = (lights) => {
    for (let IntervalLightIndex = 0; IntervalLightIndex < lights.length; IntervalLightIndex++) {
        lights[IntervalLightIndex].addEventListener('click',  () => {
            lights[IntervalLightIndex].classList.toggle('active');
            console.log('Success!')
            for (let a = 0; a < lights.length; a++) {
                if (a != IntervalLightIndex) { 
                    lights[a].classList.remove('active');
                }
            }
        });
    }
};
lightOn(lights);


