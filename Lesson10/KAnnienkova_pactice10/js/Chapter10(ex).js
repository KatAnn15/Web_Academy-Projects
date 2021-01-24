//Home work  + meeting practice

let  myOffset = 0;
let  offsetTop = 0;
let offsetRight = 500;
let offsetBottom = 500;
const moveBall = () => {
    $("#randomElement").offset({left: offset});
    offset++;
    if (offset > 500) {
      $("#randomElement").offset({left: 500,  top: offsetTop});
      offsetTop++;
   }  if (offsetTop > 500) {
       $("#randomElement").offset({left: offsetRight,  top: 500});
       offsetRight--;
   } if (offsetRight <= 0 && offsetBottom > 0) {
    $("#randomElement").offset({left: 0,  top: offsetBottom});
    offsetBottom--;
   }
}
   
const hideElement = () => {
    $('#randomElement').hide();
    setTimeout(showElement, 1000);
}
const showElement = () => {
    $('#randomElement').show()
}

const clickHandler = (event) => {
    console.log (event.pageX + "+" + event.pageY);
};

setInterval(moveBall, 5);
$("#randomElement").click(hideElement)
setTimeout(hideElement, 3000)




$("#randomElement").click(() => {
    $("#randomElement").offset({left: myOffset});
    myOffset++;
    if ( myOffset > 100) {
        $("#randomElement").hide();
    }
    console.log("Moved!")
}) 

function getRandomNumber(maxValue = 256) {
const randomNumber = Math.floor(Math.random() * maxValue);
return randomNumber; 
 }
  const changeColor = () => 
    `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;

    const btnColor = () => {
        $('#randomBtn').css('backgroundColor', changeColor());
    }

$('#randomBtn').click(btnColor);