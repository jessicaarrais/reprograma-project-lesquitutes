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
          <img style="width: 50px" class="card-img" src=${element.src} alt=${element.description}>
          <p>${element.description}</p>
          <p>${element.brief}</p>
          ${element.tags.map(tag => `<p>${tag}</p>`).join('')}
        </div>
      `;
    } else {
      divCard.innerHTML = `
        <div class='card-single'>
          <img style="width: 50px" class="card-img" src=${element.src} alt=${element.description}>
          <p>${element.description}</p>
          ${element.tags.map(tag => `<p>${tag}</p>`).join('')}
        </div>
      `;
    }

    divCardsProducts.appendChild(divCard);
  });
}

constructorHTML(dessertsArray, 'cupcake');
