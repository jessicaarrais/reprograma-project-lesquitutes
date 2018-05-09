const imported = document.createElement('script');
imported.src = 'assets/js/products.js';
document.head.appendChild(imported);

let divCardsProducts = document.querySelector('.cards-products');

function onClickProduct (buttonValue, buttonName) {
  console.log(buttonName, buttonValue);

  if (buttonValue === 'desserts-array') {
    constructorHTML(dessertsArray, buttonName);
  }

  if (buttonValue === 'cakes-array') {
    constructorHTML(cakesArray, buttonName);
  }
}

function constructorHTML (array, buttonName) {
  // if (divCardsProducts.hasChildNodes()) {
  //   divCardsProducts.removeChild(divCard);
  //   console.log(divCardsProducts.hasChildNodes());
  // }

  array.filter(element => element.type === buttonName).map(element => {
    let divCard = document.createElement('div');

    if (element.brief !== null) {
      divCard.innerHTML = `<div class="card-double"><img style="width: 50px" class="card-img" src=${element.src} alt=${element.alt}><p>${element.alt}</p></div>`;
    } else {
      divCard.innerHTML = `<div class="card-single"><img style="width: 50px" class="card-img" src=${element.src} alt=${element.alt}><p>${element.alt}</p></div>`;
    }
    divCardsProducts.appendChild(divCard);
  });
}
