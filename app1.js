function areaOfRectangle(length, breadth, area) {
  let rectangleArea = area(length, breadth);
  console.log(`area of rectangle is ${rectangleArea}`);
}

function calcArea(length, breadth) {
  return length * breadth;
}

areaOfRectangle(2, 5, calcArea);

function interest(total, interestper2, months, interest) {
  let totalIntrest = interest(total, interestper2, months);
  console.log(`total intrest for ${months} months is ${totalIntrest} `);
}

function calIntrest(total, interestper2, months) {
  return (total * interestper2 * months) / 100;
}

interest(50000, 2, 12, calIntrest);

function add(a, b, sum) {
  let total = sum(a, b);
  console.log(total);
}
let a = 10;
function plus(a, b) {
  return a + b;
}
add(a, 5, plus);

alert("welcome to chitFunds house");
let chitMoney = 10000;

function chitFunds() {
  let amount = prompt("enter the amount of chitfund");
  if (parseInt(amount) > 10000) {
    alert(
      `we dont have that much ${amount} amount, just we have ${chitMoney} `
    );
    chitFunds();
  } else {
    amount = chitMoney - amount;
    console.log(amount);
  }
}
chitFunds();
// function total() {
//   const chiFund = chitFunds(chitmoney, remaining);
// }
