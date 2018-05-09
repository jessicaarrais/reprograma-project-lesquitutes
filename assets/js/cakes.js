let divCardsProducts = document.querySelector('.les-cards-products');

function onClickCategory (productCategory) {
  if ( productCategory === 'desserts') {
    window.location.href = 'desserts.html';
  }
}

constructorHTML(cakes, 'decorated');
