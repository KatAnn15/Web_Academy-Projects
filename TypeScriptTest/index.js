// const firstFunction = () => {
//     type Boolean = true | false;
// type AdvBoolean = false | object;
// interface Family {
//         spouse: Boolean,
//         children: AdvBoolean,
//         pets: AdvBoolean
// }
// interface Person {
//     firstName: string,
//     lastName: string,
//     age: number,
//     family :  Family 
// }
// const Kateryna: Person = {
//     firstName: 'Kateryna',
//     lastName: "Annienkova",
//     age: 24,
//     family:  {
//         spouse: false,
//         children: {
//             sons: 0,
//             daughter: 0
//         },
//         pets: {
//             cats: {
//                 cat: "Yas",
//                 cat2: "Tin"
//             }
//         }
//     }
// }
// let substringTest : [string, number];
// substringTest = ["Hello", 2]
// console.log(substringTest[1]);
// enum Color {
//     Red = 10,
//     Green,
//     Blue
// }
// let c : string = Color[11];
// console.log(c)
// }
// const fetchTS = () => {
//     fetch('https://api.chucknorris.io/jokes/random')
//     .then(resp => resp.json())
//     .then (data => {
//         console.log(data)
//     })
// }
// fetchTS();
// export class App {
// }
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes  £${this.amount} for ${this.details}`;
    }
}
let invoices = [];
const inv1 = new Invoice("Frederic Mario", "Work on the website", 250).format();
invoices.push(inv1);
console.log(invoices);
