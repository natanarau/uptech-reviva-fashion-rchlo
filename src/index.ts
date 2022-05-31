const keys = Object.keys(localStorage);

for (let key of keys) {
  const productsStored = JSON.parse(localStorage.getItem(key));
  const valueProductFormat = productsStored.preco.toFixed(2).replace('.', ',');

  if (productsStored.categoria === 1) {
    const block = document.createElement('div');
    document.querySelector('.category1').appendChild(block);
    block.classList.add(
      'detail-product',
      `detail-product-${productsStored.id}`,
    );
  }

  if (productsStored.categoria === 2) {
    const block = document.createElement('div');
    document.querySelector('.category2').appendChild(block);
    block.classList.add(
      'detail-product',
      `detail-product-${productsStored.id}`,
    );
  }

  const blockProduct = document.createElement('div');
  document
    .querySelector(`.detail-product-${productsStored.id}`)
    .appendChild(blockProduct);
  blockProduct.classList.add('product', `product-${productsStored.id}`);

  const blockDescription = document.createElement('div');
  document
    .querySelector(`.detail-product-${productsStored.id}`)
    .appendChild(blockDescription);
  blockDescription.classList.add(
    'description-product',
    `description-product-${productsStored.id}`,
  );

  const blockProductImg = document.createElement('img');
  document
    .querySelector(`.product-${productsStored.id}`)
    .appendChild(blockProductImg);
  blockProductImg.classList.add(
    'product__img',
    `product__img-${productsStored.id}`,
  );
  blockProductImg.setAttribute('src', `${productsStored.imagens[0].url}`);
  blockProductImg.setAttribute('alt', 'descrição da imagem');

  const blockDetailsSizes = document.createElement('div');
  document
    .querySelector(`.product-${productsStored.id}`)
    .appendChild(blockDetailsSizes);
  blockDetailsSizes.classList.add(
    'details__sizes',
    `details__sizes-${productsStored.id}`,
  );

  const blockDetailsRadiosP = document.createElement('div');
  document
    .querySelector(`.details__sizes-${productsStored.id}`)
    .appendChild(blockDetailsRadiosP);
  blockDetailsRadiosP.classList.add(
    'details__radios',
    `details__radios-p-${productsStored.id}`,
  );

  const blockDetailsRadiosM = document.createElement('div');
  document
    .querySelector(`.details__sizes-${productsStored.id}`)
    .appendChild(blockDetailsRadiosM);
  blockDetailsRadiosM.classList.add(
    'details__radios',
    `details__radios-m-${productsStored.id}`,
  );

  const blockDetailsRadiosG = document.createElement('div');
  document
    .querySelector(`.details__sizes-${productsStored.id}`)
    .appendChild(blockDetailsRadiosG);
  blockDetailsRadiosG.classList.add(
    'details__radios',
    `details__radios-g-${productsStored.id}`,
  );

  const blockDetailsLabelP = document.createElement('label');
  document
    .querySelector(`.details__radios-p-${productsStored.id}`)
    .appendChild(blockDetailsLabelP);
  blockDetailsLabelP.classList.add(
    'details__label',
    `details__label-p-${productsStored.id}`,
  );

  const blockDetailsLabelM = document.createElement('label');
  document
    .querySelector(`.details__radios-m-${productsStored.id}`)
    .appendChild(blockDetailsLabelM);
  blockDetailsLabelM.classList.add(
    'details__label',
    `details__label-m-${productsStored.id}`,
  );

  const blockDetailsLabelG = document.createElement('label');
  document
    .querySelector(`.details__radios-g-${productsStored.id}`)
    .appendChild(blockDetailsLabelG);
  blockDetailsLabelG.classList.add(
    'details__label',
    `details__label-g-${productsStored.id}`,
  );

  const blockDetailsInputP = document.createElement('input');
  document
    .querySelector(`.details__label-p-${productsStored.id}`)
    .appendChild(blockDetailsInputP);
  blockDetailsInputP.classList.add(
    'details__input',
    `details__input-p-${productsStored.id}`,
  );
  blockDetailsInputP.setAttribute('type', 'radio');
  blockDetailsInputP.setAttribute('name', 'size');
  blockDetailsInputP.setAttribute('value', 'P');

  const blockDetailsInputM = document.createElement('input');
  document
    .querySelector(`.details__label-m-${productsStored.id}`)
    .appendChild(blockDetailsInputM);
  blockDetailsInputM.classList.add(
    'details__input',
    `details__input-m-${productsStored.id}`,
  );
  blockDetailsInputM.setAttribute('type', 'radio');
  blockDetailsInputM.setAttribute('name', 'size');
  blockDetailsInputM.setAttribute('value', 'M');

  const blockDetailsInputG = document.createElement('input');
  document
    .querySelector(`.details__label-g-${productsStored.id}`)
    .appendChild(blockDetailsInputG);
  blockDetailsInputG.classList.add(
    'details__input',
    `details__input-g-${productsStored.id}`,
  );
  blockDetailsInputG.setAttribute('type', 'radio');
  blockDetailsInputG.setAttribute('name', 'size');
  blockDetailsInputG.setAttribute('value', 'G');

  const blockDetailsSpanP = document.createElement('span');
  document
    .querySelector(`.details__label-p-${productsStored.id}`)
    .appendChild(blockDetailsSpanP).innerHTML = 'P';
  blockDetailsSpanP.classList.add(
    'details__span',
    `details__span-p-${productsStored.id}`,
  );

  const blockDetailsSpanM = document.createElement('span');
  document
    .querySelector(`.details__label-m-${productsStored.id}`)
    .appendChild(blockDetailsSpanM).innerHTML = 'M';
  blockDetailsSpanM.classList.add(
    'details__span',
    `details__span-m-${productsStored.id}`,
  );

  const blockDetailsSpanG = document.createElement('span');
  document
    .querySelector(`.details__label-g-${productsStored.id}`)
    .appendChild(blockDetailsSpanG).innerHTML = 'G';
  blockDetailsSpanG.classList.add(
    'details__span',
    `details__span-g-${productsStored.id}`,
  );

  const blockNameProduct = document.createElement('h3');
  document
    .querySelector(`.description-product-${productsStored.id}`)
    .appendChild(blockNameProduct).innerHTML = `${productsStored.nome}`;
  blockNameProduct.classList.add(
    'name-product',
    `name-product-${productsStored.id}`,
  );

  const blockValueProduct = document.createElement('p');
  document
    .querySelector(`.description-product-${productsStored.id}`)
    .appendChild(blockValueProduct).innerHTML = `R$ ${valueProductFormat}`;
  blockValueProduct.classList.add(
    'value-product',
    `value-product-${productsStored.id}`,
  );

  const blockButtonAdd = document.createElement('button');
  document
    .querySelector(`.description-product-${productsStored.id}`)
    .appendChild(blockButtonAdd);
  blockButtonAdd.classList.add('add', `add-${productsStored.id}`);
  blockButtonAdd.setAttribute('id', `${productsStored.id}`);

  const blockAddContent = document.createElement('div');
  document
    .querySelector(`.add-${productsStored.id}`)
    .appendChild(blockAddContent);
  blockAddContent.classList.add(
    'add__content',
    `add__content-${productsStored.id}`,
  );

  const blockAddCart = document.createElement('div');
  document
    .querySelector(`.add__content-${productsStored.id}`)
    .appendChild(blockAddCart).innerHTML = 'POR NO CARRINHO';
  blockAddCart.classList.add('add__cart', `add__cart-${productsStored.id}`);

  const blockAddOk = document.createElement('div');
  document
    .querySelector(`.add__content-${productsStored.id}`)
    .appendChild(blockAddOk);
  blockAddOk.classList.add('add__ok', `add__ok-${productsStored.id}`);

  const blockAddImg = document.createElement('img');
  document
    .querySelector(`.add__cart-${productsStored.id}`)
    .appendChild(blockAddImg);
  blockAddImg.classList.add('add__img', `add__img-${productsStored.id}`);
  blockAddImg.setAttribute('src', 'img/icons/shopping_cart_2.svg');
  blockAddImg.setAttribute('alt', 'Adicionar ao Carrinho');

  const blockImgOk = document.createElement('img');
  document
    .querySelector(`.add__ok-${productsStored.id}`)
    .appendChild(blockImgOk);
  blockImgOk.classList.add('add__ok-img', `add__ok-img-${productsStored.id}`);
  blockImgOk.setAttribute('src', 'img/icons/check-solid.svg');
  blockImgOk.setAttribute('alt', 'Adicionar ao Carrinho');
}
