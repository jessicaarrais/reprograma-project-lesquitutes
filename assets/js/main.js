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
      divCard.className = `card les-card-double${i}`;
      divCard.innerHTML = `
        <div class='card-body'>
          <h6>${element.description}</h6>
          <p>${element.brief}</p>
          ${element.tags.map(tag => `<p>${tag}</p>`).join('')}
        </div>
      `;
    } else {
      divCard.className = 'card les-card-single';
      divCard.style.backgroundImage = `url(${element.src})`;
      divCard.innerHTML = `
        <div class='card-body'>
          <h6>${element.description}</h6>
          ${element.tags.map(tag => `<p>${tag}</p>`).join('')}
        </div>
      `;
    }

    divCardsProducts.appendChild(divCard);
  });
}
