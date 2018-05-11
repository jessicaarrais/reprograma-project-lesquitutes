function onClickCategory(productCategory) {
    if (productCategory === 'cakes') {
        window.location.href = 'cakes.html';
    }
    if (productCategory === 'desserts') {
        window.location.href = 'desserts.html';
    }
}

function onClickProductType(productCategory, productType) {
    console.log(productType, productCategory);

    if (productCategory === 'desserts-array') {
        constructorHTML(desserts, productType);
    }

    if (productCategory === 'cakes-array') {
        constructorHTML(cakes, productType);
    }
}

function constructorHTML(categories, productType) {
    if (divCardsProducts.hasChildNodes()) {
        while (divCardsProducts.firstChild) {
            divCardsProducts.removeChild(divCardsProducts.firstChild);
        }
    }

    switch (productType) {
        case 'cupcake':
            document.querySelector('.product-title').textContent = 'Cupcakes';
            break;
        case'dessert':
            document.querySelector('.product-title').textContent = 'Docinhos';
            break;
        case'souvenir':
            document.querySelector('.product-title').textContent = 'Lembrancinhas';
            break;
        case'decorated':
            document.querySelector('.product-title').textContent = 'Bolos decorados';
            break;
        case'naked-cake':
            document.querySelector('.product-title').textContent = 'Naked Cake';
            break;
        case'american-pasta':
            document.querySelector('.product-title').textContent = 'Pasta americana';
            break;
    }

    categories.filter(element => element.type === productType).forEach(element => {
        const divCard = document.createElement('div');

        if (element.brief !== '') {
            divCard.className = 'card les-card-double d-flex align-items-stretchs';
            divCard.innerHTML = `
            <img class='img-fluid h-100' src=${element.src}>
            <div class='card-body position-absolute w-50'>
                <p class='text-shadow card-text text-light card-headline'>${element.brief}</p>
                <p class='text-shadow card-text- text-light card-tagline mb-2'>${element.author}</p>

                ${element.tags.map(tag => `<img class='stamp-card' src='${tag}'>`).join('')}
            </div>
            <div class='card-text bg-light'>
                <p class='text-center mt-2 mb-2'>${element.description}</p>
            </div>
          `;
        } else {
            divCard.className = 'card les-card-single d-flex align-items-stretch';
            divCard.innerHTML = `
            <img class='img-fluid h-100' src=${element.src}>
            <div class='card-body position-absolute w-50'>
            ${element.tags.map(tag => `<img class='stamp-card' src='${tag}'>`).join('')}
            </div>
            <div class='card-text bg-light'>
              <p class='text-center mt-2 mb-2'>${element.description}</p>
            </div>
            `;
        }

        divCardsProducts.appendChild(divCard);
    });
}
