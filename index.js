const process = require('process');

let itemCostInput;
let paymentInput;

for (let i = 0; i < process.argv.length; ++i) {
  const arg = process.argv[i];
  if (arg === '--item-cost') {
    itemCostInput = process.argv[i + 1];
    ++i;
  } else if (arg === '--payment') {
    paymentInput = process.argv[i + 1];
    ++i;
  }
}

if (itemCostInput == undefined) {
  console.error('--item-cost must be provided');
  process.exit(1);
}

const itemCost = Number(itemCostInput);
if (isNaN(itemCost)) {
  console.log('--item-cost must be a number');
  process.exit(1);
}

if (paymentInput == undefined) {
  console.error('--payment must be provided');
  process.exit(1);
}

const payment = Number(paymentInput);
if (isNaN(payment)) {
  console.log('--payment must be a number');
  process.exit(1);
}

if (itemCost > payment) {
  console.log('Negative balance, transaction not successful!');
  process.exit(1);
}

let change = Math.floor(payment * 100) - Math.floor(itemCost * 100);

let quarters = 0;
let dimes = 0;
let nickels = 0;
let pennies = 0;

while (change >= 25) {
  change -= 25;
  quarters++;
}

while (change >= 10) {
  change -= 10;
  dimes++;
}

while (change >= 5) {
  change -= 5;
  nickels++;
}

while (change >= 1) {
  change -= 1;
  pennies++;
}

console.log(`Change: $${change / 100}`);
console.log(`Quarters: ${quarters}`);
console.log(`Dimes: ${dimes}`);
console.log(`Nickels: ${nickels}`);
console.log(`Pennies: ${pennies}`);
console.log('Transaction Successful!');



