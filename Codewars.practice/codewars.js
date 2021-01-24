// function testit(a,b){
// const joinedSorted = a.concat(b).sort((a, b) => a - b);
// let   newArr = [];
// newArr = joinedSorted.filter ((item, index) => {
//   return  joinedSorted.indexOf(item) == (index -2) ? null  : newArr.push(item)
//  })
//  return newArr;
// }

//const testit = (a, b) => [...new Set(a), ...new Set(b)].sort((x, y) => x - y);

//const testit = (a,b) =>  [...new Set(a),...new Set(b)].sort ((a,b) => a - b);

//console.log(testit([1,1,1,3,3,3,3,4,4,4,4,1],[1,5,5,5,5,5,5,5,4]));

function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  return m[birthday.getMonth()] + " " +  d[birthday.getDate() % 10];
}

console.log (getVillainName(new Date('April 21')))
