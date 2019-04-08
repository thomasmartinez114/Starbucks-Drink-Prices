var readlineSync = require('readline-sync'),


drinks = readlineSync.question('Welcome to Star Bucks! \n For Latte please enter 1 \n For Iced Coffee please enter 2 \n For Frappaccino please enter 3 \n So which drink would you like? ', {
   drink1: "1",
   drink2: "2",
   drink3: "3",

});

const lattePrice = 2;
const icedCoffeePrice = 1;
const frappaccinoPrice = 3;
let salesTax = .07

let latteTotal = (lattePrice * salesTax) + lattePrice;
let icedCoffeeTotal = (icedCoffeePrice * salesTax) + icedCoffeePrice;
let frappaccinoTotal = (frappaccinoPrice * salesTax) + frappaccinoPrice;

if (drinks === '1') {
 console.log('Perfect! Your latte will cost you $' +latteTotal);
} else if (drinks === "2") {
 console.log('Fantastic! Your iced coffee will cost you $' +icedCoffeeTotal);
} else if (drinks === "3") {
 console.log('Sure! Your frappaccino will cost you $' +frappaccinoTotal);

} else {
 console.log('Sorry. We do not have "' + drinks + '" for sale. You are welcome to try something else.');
}