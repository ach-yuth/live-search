alert(" hello, welcome to bar");

let beerStock = 10;
let wineStock = 10;

let numberOfBeer;
let numberOfWine;

function takeBeerOrder() {
  numberOfBeer = prompt("How many beers do you want");
  if (beerStock < numberOfBeer) {
    alert(`There is only ${beerStock}`);
    takeBeerOrder();
  } else {
    beerStock = beerStock - numberOfBeer;
  }
}

function takeWineOrder() {
  numberOfWine = prompt("How many wine bottles do you want");
  if (wineStock < numberOfWine) {
    alert(`There is only ${wineStock}`);
    takeWineOrder();
  } else {
    wineStock = wineStock - numberOfWine;
  }
}

function billPrint(numbeer, numwine) {
  let beerPrice = 20;
  let winePrice = 10;
  let total = numbeer * beerPrice + numwine * winePrice;
  alert(
    `no of beers is ${numbeer} and no of wines is ${numwine} ,bill is ${total}`
  );
}

function run() {
  takeBeerOrder();
  takeWineOrder();
  billPrint(numberOfBeer, numberOfWine);
  const newOrder = prompt("if your'e done ,press yes");
  if (newOrder !== "yes") {
    run();
  }
}

run();
