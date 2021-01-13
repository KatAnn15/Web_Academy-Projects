const widgetBtn = document.querySelector(".changeColorBtn");
const widgetOpen = document.querySelector(".openWidget");
const widgetClose = document.querySelector(".closeWidget") ;
const modalWidget = document.querySelector("#modalWidget");
const modalContent = document.querySelector("#modalContent");

//changeColorBtn

widgetBtn.style.position = "absolute";
widgetBtn.style.transform = "translate(-50%, -50%)";
widgetBtn.style.top = "50%";
widgetBtn.style.left = "50%";
widgetBtn.style.padding = "25px";
widgetBtn.style.borderRadius = "20px";
widgetBtn.style.fontWeight = "800";
widgetBtn.style.color = "white";
widgetBtn.style.backgroundColor = "red";

function GetRandomNumber (maxValue = 256) {
    const GetRandomNumber = Math.floor(Math.random() * maxValue);
    return GetRandomNumber;
}

const  btnRandomColor = () => 
`rgb(${GetRandomNumber(200)}, ${GetRandomNumber(100)}, ${GetRandomNumber(150)})`;


widgetBtn.style.backgroundColor = btnRandomColor;

function changeBtnColor() {
    widgetBtn.style.backgroundColor = btnRandomColor();
}

widgetBtn.addEventListener('click', changeBtnColor);

//openWidgetBtn 

widgetOpen.style.position = "absolute";
widgetOpen.style.top = "35%";
widgetOpen.style.left = "50%"
widgetOpen.style.transform = "translate(-50%, -50%)";
widgetOpen.style.padding = "20px";
widgetOpen.style.fontWeight = "800";
widgetOpen.style.borderRadius = "20px";
widgetOpen.style.backgroundColor = "pink";

const openModalWidget = () => {
    modalWidget.classList.add('active');
};
widgetOpen.addEventListener('click', openModalWidget);

//closeWidgetBtn 

widgetClose.style.position = "absolute";
widgetClose.style.top = "10%";
widgetClose.style.right = "0"
widgetClose.style.transform = "translate(-50%, -50%)";
widgetClose.style.padding = "20px";
widgetClose.style.fontWeight = "800";
widgetClose.style.borderRadius = "20px";
widgetClose.style.backgroundColor = "#DC143C";

const closeThisWidget = () => {
    modalWidget.classList.remove('active');
} 

widgetClose.addEventListener('click', closeThisWidget);

