let divCardsProducts = document.querySelector('.les-cards-products');

function onClickCategory (productCategory) {
  if ( productCategory === 'cakes') {
    window.location.href = 'cakes.html';
  }
}

constructorHTML(desserts, 'cupcake');
