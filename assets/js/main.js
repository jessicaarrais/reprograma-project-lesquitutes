function onClickProductType (productCategory, productType) {
  console.log(productType, productCategory);

  if (productCategory === 'desserts-array') {
    constructorHTML(desserts, productType);
  }

  if (productCategory === 'cakes-array') {
    constructorHTML(cakes, productType);
  }
}

function constructorHTML (categories, productType) {
  if (divCardsProducts.hasChildNodes()) {
    while (divCardsProducts.firstChild) {
      divCardsProducts.removeChild(divCardsProducts.firstChild);
    }
  }

  categories.filter(element => element.type === productType).map(element => {
    const divCard = document.createElement('div');

    if (element.brief !== '') {
      divCard.innerHTML = `
        <div class='les-card-double'>
          <img style="width: 50px" class="les-card-img" src=${element.src} alt=${element.description}>
          <p>${element.description}</p>
          <p>${element.brief}</p>
          ${element.tags.map(tag => `<p>${tag}</p>`).join('')}
        </div>
      `;
    } else {
      divCard.innerHTML = `
        <div class='les-card-single'>
          <img style="width: 50px" class="les-card-img" src=${element.src} alt=${element.description}>
          <p>${element.description}</p>
          ${element.tags.map(tag => `<p>${tag}</p>`).join('')}
        </div>
      `;
    }

    divCardsProducts.appendChild(divCard);
  });
}
