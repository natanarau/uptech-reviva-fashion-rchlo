"use strict";
const keys = Object.keys(localStorage);
keys.forEach((key) => {
    const productsStored = JSON.parse(localStorage.getItem(key));
    if (productsStored.carrinho > 0) {
        const blockCart = document.createElement('div');
        document.querySelector('.box-cart__list-products').appendChild(blockCart);
        blockCart.classList.add('box-cart__product', `box-cart__product-${productsStored.id}`);
        const blockCardImg = document.createElement('img');
        document
            .querySelector(`.box-cart__product-${productsStored.id}`)
            .appendChild(blockCardImg);
        blockCardImg.classList.add('box-cart__img', `box-cart__img-${productsStored.id}`);
        blockCardImg.setAttribute('src', `${productsStored.imagens[0].url}`);
        blockCardImg.setAttribute('alt', `${productsStored.imagens[0].descricao}`);
        const blockCardName = document.createElement('div');
        document
            .querySelector(`.box-cart__product-${productsStored.id}`)
            .appendChild(blockCardName);
        blockCardName.classList.add('box-cart__name', `box-cart__name-${productsStored.id}`);
        const blockCardTitle = document.createElement('h3');
        document
            .querySelector(`.box-cart__name-${productsStored.id}`)
            .appendChild(blockCardTitle).innerHTML = 'Produto';
        blockCardTitle.classList.add('box-cart__title', `box-cart__title-${productsStored.id}`);
        const blockCardDesc = document.createElement('span');
        document
            .querySelector(`.box-cart__name-${productsStored.id}`)
            .appendChild(blockCardDesc).innerHTML = productsStored.nome;
        blockCardDesc.classList.add('box-cart__desc', `box-cart__desc-${productsStored.id}`);
        const blockCardSize = document.createElement('div');
        document
            .querySelector(`.box-cart__product-${productsStored.id}`)
            .appendChild(blockCardSize);
        blockCardSize.classList.add('box-cart__size', `box-cart__size-${productsStored.id}`);
        const blockCardTitleSize = document.createElement('h3');
        document
            .querySelector(`.box-cart__size-${productsStored.id}`)
            .appendChild(blockCardTitleSize).innerHTML = 'Tamanho escolhido';
        blockCardTitleSize.classList.add('box-cart__title', `box-cart__title-${productsStored.id}`);
        const detailsSize = document.createElement('div');
        document
            .querySelector(`.box-cart__size-${productsStored.id}`)
            .appendChild(detailsSize);
        detailsSize.classList.add('details__sizes', `details__sizes-${productsStored.id}`);
        const detailsRadiosP = document.createElement('div');
        document
            .querySelector(`.details__sizes-${productsStored.id}`)
            .appendChild(detailsRadiosP);
        detailsRadiosP.classList.add('details__radios', `details__radios-p-${productsStored.id}`);
        const detailsLabelP = document.createElement('label');
        document
            .querySelector(`.details__radios-p-${productsStored.id}`)
            .appendChild(detailsLabelP);
        detailsLabelP.classList.add('details__label', `details__label-p-${productsStored.id}`);
        const detailsInputP = document.createElement('input');
        document
            .querySelector(`.details__label-p-${productsStored.id}`)
            .appendChild(detailsInputP);
        detailsInputP.classList.add('details__input', `details__input-p-${productsStored.id}`);
        detailsInputP.setAttribute('type', 'radio');
        detailsInputP.setAttribute('name', 'size');
        detailsInputP.setAttribute('value', 'P');
        const detailsSpanP = document.createElement('span');
        document
            .querySelector(`.details__label-p-${productsStored.id}`)
            .appendChild(detailsSpanP).innerHTML = 'P';
        detailsSpanP.classList.add('details__span', `details__span-p-${productsStored.id}`);
        const detailsRadiosM = document.createElement('div');
        document
            .querySelector(`.details__sizes-${productsStored.id}`)
            .appendChild(detailsRadiosM);
        detailsRadiosM.classList.add('details__radios', `details__radios-m-${productsStored.id}`);
        const detailsLabelM = document.createElement('label');
        document
            .querySelector(`.details__radios-m-${productsStored.id}`)
            .appendChild(detailsLabelM);
        detailsLabelM.classList.add('details__label', `details__label-m-${productsStored.id}`);
        const detailsInputM = document.createElement('input');
        document
            .querySelector(`.details__label-m-${productsStored.id}`)
            .appendChild(detailsInputM);
        detailsInputM.classList.add('details__input', `details__input-m-${productsStored.id}`);
        detailsInputM.setAttribute('type', 'radio');
        detailsInputM.setAttribute('name', 'size');
        detailsInputM.setAttribute('value', 'M');
        const detailsSpanM = document.createElement('span');
        document
            .querySelector(`.details__label-m-${productsStored.id}`)
            .appendChild(detailsSpanM).innerHTML = 'M';
        detailsSpanM.classList.add('details__span', `details__span-m-${productsStored.id}`);
        const detailsRadiosG = document.createElement('div');
        document
            .querySelector(`.details__sizes-${productsStored.id}`)
            .appendChild(detailsRadiosG);
        detailsRadiosG.classList.add('details__radios', `details__radios-g-${productsStored.id}`);
        const detailsLabelG = document.createElement('label');
        document
            .querySelector(`.details__radios-g-${productsStored.id}`)
            .appendChild(detailsLabelG);
        detailsLabelG.classList.add('details__label', `details__label-g-${productsStored.id}`);
        const detailsInputG = document.createElement('input');
        document
            .querySelector(`.details__label-g-${productsStored.id}`)
            .appendChild(detailsInputG);
        detailsInputG.classList.add('details__input', `details__input-g-${productsStored.id}`);
        detailsInputG.setAttribute('type', 'radio');
        detailsInputG.setAttribute('name', 'size');
        detailsInputG.setAttribute('value', 'G');
        const detailsSpanG = document.createElement('span');
        document
            .querySelector(`.details__label-g-${productsStored.id}`)
            .appendChild(detailsSpanG).innerHTML = 'G';
        detailsSpanG.classList.add('details__span', `details__span-g-${productsStored.id}`);
        const boxCartValue = document.createElement('div');
        document
            .querySelector(`.box-cart__product-${productsStored.id}`)
            .appendChild(boxCartValue);
        boxCartValue.classList.add('box-cart__value', `box-cart__value-${productsStored.id}`);
        const boxCartTitleValue = document.createElement('h3');
        document
            .querySelector(`.box-cart__value-${productsStored.id}`)
            .appendChild(boxCartTitleValue).innerHTML = 'Valor';
        boxCartTitleValue.classList.add('box-cart__title', `box-cart__title-${productsStored.id}`);
        const boxCartDesc = document.createElement('div');
        document
            .querySelector(`.box-cart__value-${productsStored.id}`)
            .appendChild(boxCartDesc);
        boxCartDesc.classList.add('box-cart__desc', `box-cart__desc-value-${productsStored.id}`);
        const boxCartValueProducts = document.createElement('span');
        document
            .querySelector(`.box-cart__desc-value-${productsStored.id}`)
            .appendChild(boxCartValueProducts).innerHTML = `R$ ${productsStored.preco}`;
        boxCartValueProducts.classList.add('value-product', `value-product-${productsStored.id}`);
        const boxCartQt = document.createElement('div');
        document
            .querySelector(`.box-cart__product-${productsStored.id}`)
            .appendChild(boxCartQt);
        boxCartQt.classList.add('box-cart__qt', `box-cart__qt-${productsStored.id}`);
        const boxCartTitleQt = document.createElement('h3');
        document
            .querySelector(`.box-cart__qt-${productsStored.id}`)
            .appendChild(boxCartTitleQt).innerHTML = 'Quantidade';
        boxCartTitleQt.classList.add('box-cart__title', `box-cart__title-${productsStored.id}`);
        const boxCartInputQt = document.createElement('input');
        boxCartInputQt.addEventListener('change', (e) => {
            const productsLocal = JSON.parse(localStorage.getItem(productsStored.id));
            productsLocal.carrinho = +boxCartInputQt.value; // ALTERAR QUANTIDADE DO CARRINHO
            localStorage.setItem(productsStored.id, JSON.stringify(productsLocal));
        });
        document
            .querySelector(`.box-cart__qt-${productsStored.id}`)
            .appendChild(boxCartInputQt);
        boxCartInputQt.classList.add('box-cart__input', `box-cart__input-${productsStored.id}`);
        boxCartInputQt.setAttribute('value', `${productsStored.carrinho}`);
        boxCartInputQt.setAttribute('type', 'number');
        boxCartInputQt.setAttribute('name', 'qt');
        boxCartInputQt.setAttribute('min', '1');
        boxCartInputQt.setAttribute('max', `${productsStored.quantidade_disponivel}`);
        const boxCartSubTotal = document.createElement('div');
        document
            .querySelector(`.box-cart__product-${productsStored.id}`)
            .appendChild(boxCartSubTotal);
        boxCartSubTotal.classList.add('box-cart__sub-total', `box-cart__sub-total-${productsStored.id}`);
        const boxCartSubTitle = document.createElement('h3');
        document
            .querySelector(`.box-cart__sub-total-${productsStored.id}`)
            .appendChild(boxCartSubTitle).innerText = 'SubTotal';
        boxCartSubTitle.classList.add('box-cart__title', `box-cart__title-${productsStored.id}`);
        const boxCartSubTotalValue = document.createElement('div');
        document
            .querySelector(`.box-cart__sub-total-${productsStored.id}`)
            .appendChild(boxCartSubTotalValue);
        boxCartSubTotalValue.classList.add('box-cart__desc', `box-cart__desc-subtotal-${productsStored.id}`);
        const boxCartSubTotalResult = document.createElement('span');
        const productsLocal = JSON.parse(localStorage.getItem(productsStored.id));
        const valueSubTotal = productsLocal.carrinho * productsStored.preco;
        document
            .querySelector(`.box-cart__desc-subtotal-${productsStored.id}`)
            .appendChild(boxCartSubTotalResult).innerHTML = `R$ ${valueSubTotal
            .toFixed(2)
            .replace('.', ',')}`;
        boxCartInputQt.addEventListener('change', (e) => {
            const productsLocal = JSON.parse(localStorage.getItem(productsStored.id));
            const valueSubTotal = productsLocal.carrinho * productsStored.preco;
            productsLocal.total = +productsLocal.preco * productsLocal.carrinho;
            localStorage.setItem(productsLocal.id, JSON.stringify(productsLocal));
            document
                .querySelector(`.box-cart__desc-subtotal-${productsStored.id}`)
                .appendChild(boxCartSubTotalResult).innerHTML = `R$ ${valueSubTotal
                .toFixed(2)
                .replace('.', ',')}`;
        });
        boxCartSubTotalResult.classList.add('subTotal', `subTotal-${productsStored.id}`);
        const totalBox = document.querySelector('.box-cart__revis');
        totalBox.classList.add('total-flex');
    }
});
