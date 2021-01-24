//Home work as well

// 1
$('html').click( (event) => {
$('.text').offset({left: event.pageX, top: event.pageY});
})

//2
 let myOffset = 0;
let direction = "toRight";
const text = $('.text');
text.offset({left: myOffset, top: myOffset})

const loop = () => {
   if (direction === 'toRight') {
    text.offset({left: myOffset});
    myOffset++;
        if(myOffset > 200) {
        myOffset = 0;
        direction = 'toBottom'
    }
  }   else if (direction === 'toBottom') {
      text.offset({top: myOffset});
      myOffset++;
      if (myOffset > 200) {
          myOffset = 200;
          direction = 'toLeft';
      }
  } else if (direction === 'toLeft') {
      text.offset({left: myOffset});
      myOffset--;
      if (myOffset < 0) {
          myOffset = 200;
          direction = 'toTop';
      }
  } else if (direction === 'toTop') {
      text.offset({top: myOffset});
      myOffset--;
      if (myOffset < 0)  {
          myOffset = 0;
          direction = 'toRight';
      }
  }
}
let thisSpeed = 200;
let  thisInterval = setInterval(loop, thisSpeed);
let clickCount = 0;
 text.click( () => {
        thisSpeed /= 2;
        clickCount++;
        clearInterval(thisInterval);
        if (clickCount > 10) {
            clearInterval(thisInterval);
        } else {
            thisInterval = setInterval(loop, thisSpeed);
        }
});



