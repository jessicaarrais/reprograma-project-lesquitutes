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
  if (divCardsProducts.hasChildNodes()) {
    while (divCardsProducts.firstChild) {
      divCardsProducts.removeChild(divCardsProducts.firstChild);
    }
  }

  array.filter(element => element.type === buttonName).map(element => {
    const divCard = document.createElement('div');

    if (element.brief !== '') {
      divCard.innerHTML = `
        <div class='card-double'>
          <img style="width: 50px" class="card-img" src=${element.src} alt=${element.alt}>
          <p>${element.alt}</p>
          <p>${element.brief}</p>
        </div>
      `;
    } else {
      divCard.innerHTML = `
        <div class='card-single'>
          <img style="width: 50px" class="card-img" src=${element.src} alt=${element.alt}>
          <p>${element.alt}</p>
        </div>
      `;
    }



    divCardsProducts.appendChild(divCard);
  });
}
