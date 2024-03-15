alert("welcome to bar");

function ordertaker(itemName, stock) {
  const numberOfItem = prompt(`how many ${itemName} do you want?`);
  if (parseInt(numberOfItem) > stock) {
    alert(`our stock is only ${stock}`);
    return null;
  } else {
    return parseInt(numberOfItem);
  }
}

let beerStock = 10;
let numberOfBeerOrder = 0;

function beerOrder() {
  const beersOrdered = ordertaker("beers", beerStock);
  if (beersOrdered !== null) {
    numberOfBeerOrder = beersOrdered;
    beerStock = beerStock - numberOfBeerOrder;
  } else {
    beerOrder();
  }
}
beerOrder();

alert(
  `your no of ordered beer is ${numberOfBeerOrder} and remaining stock is ${beerStock} `
);
