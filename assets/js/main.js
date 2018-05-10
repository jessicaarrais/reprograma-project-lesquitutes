function onClickCategory (productCategory) {
  if ( productCategory === 'cakes') {
    window.location.href = 'cakes.html';
  }
  if ( productCategory === 'desserts') {
    window.location.href = 'desserts.html';
  }
}

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

  let i = 0;
  categories.filter(element => element.type === productType).forEach(element => {
    const divCard = document.createElement('div');

    if (element.brief !== '') {
      i++;
      divCard.className = 'card les-card-double d-flex align-items-stretchs';
      divCard.innerHTML = `
        <img class='mg-fluid h-100' src=${element.src}>
        <div class='card-body position-absolute w-50'>
          <p class='card-text text-light card-headline'>${element.brief}</p>
          <p class='card-text text-light card-tagline mb-0'>Tatiane Araújo</p>
          <p class='card-text text-light card-tagline'>Instagram</p>
          <div class='card-text bg-light'>
            <p class='text-center mt-2 mb-2'>${element.description}</p>
          </div>
          ${element.tags.map(tag => `<img class='stamp-card' src='${element.srcTagG}'>`).join('')}
        </div>
      `;
    } else {
      divCard.className = 'card les-card-single d-flex align-items-stretch';
      divCard.innerHTML = `
        <img class='img-fluid h-100' src=${element.src}>
        <div class='card-text bg-light'>
          <p class='text-center mt-2 mb-2'>${element.description}</p>
          ${element.tags.map(tag => `<p>${tag}</p>`).join('')}
        </div>
      `;
    }

    divCardsProducts.appendChild(divCard);
  });
}
