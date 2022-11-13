fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    console.log(data.products);
    // Start here :)
    const products = data.products; 
    const div = document.querySelector('.wrapper');
    div.classList.add('gy-3'); 

    products.forEach(data => {
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('col-md-3');

      const productCard = document.createElement('div');
      productCard.classList.add('card','h-100');

      const imag = document.createElement(`img`);
      imag.setAttribute('src', data.thumbnail);
      imag.setAttribute('alt', `Image of product`);
      imag.classList.add('card-img-top','card-image')

      const bodyProductCard = document.createElement('div');
      bodyProductCard.classList.add('card-body','d-flex','flex-column');

      const title = document.createElement('h4');
      title.classList.add('card-title');
      title.textContent = `${data.title}`;

      const description = document.createElement('p');
      description.classList.add('card-text','flex-fill');
      description.textContent = `${data.description}`;

      const footerProductCard = document.createElement('div');
      footerProductCard.classList.add('card-footer','d-flex','justify-content-around');

      const price = document.createElement('div');
      price.textContent = `Price : ${data.price}$`;

      const rating = document.createElement('div');
      rating.textContent = `Rating : ${data.rating}`;

      bodyProductCard.append(title, description);
      footerProductCard.append(price, rating)
      productCard.append(imag, bodyProductCard, footerProductCard);
      cardContainer.append(productCard);
      div.append(cardContainer);
    });
  });
