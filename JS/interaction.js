const cartIcon = document.querySelector('.header__icon--secondary');
const cartSidebar = document.querySelector('.cart-sidebar');
const cartClose = document.querySelector('.cart-close');
const cartList = document.querySelector('.cart-content');
const addButtons = document.querySelectorAll('.products__btn');
const hambMenu = document.querySelector('.header__hamb');
const hambTopMenu = document.querySelector('.hamb__menu');
const hambClose = document.querySelector('.hamb__close');


// ABRIR / CERRAR SIDEBAR
cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('active');
});

cartClose.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
});

// ABRIR / CERRAR MENU

hambMenu.addEventListener('click', () => {
    hambTopMenu.classList.add('active');
});

hambClose.addEventListener('click',() => {
    hambTopMenu.classList.remove('active');
});



// AGREGAR PRODUCTO DESDE CADA BOTÓN
addButtons.forEach(btn => {
    btn.addEventListener('click', () => {

        const name = btn.dataset.name;
        const price = btn.dataset.price;
        const img = btn.dataset.img;

        addToCart(name, price, img);
    });
});

// FUNCIÓN PARA AGREGAR AL CARRITO
function addToCart(name, price, img) {
    const li = document.createElement('li');

    li.innerHTML = `
        <div class="cart-item">
            <img class="cart-img-prod" src="${img}" alt="">
            <div class="cart-description">
                <p class="cart-prod-description">${name}</p>
                <p class="cart-prod-price">$${price}</p>
            </div>
            <i data-feather="trash" class="cart-remove"></i>
        </div>
    `;

    cartList.appendChild(li);

    feather.replace();
    updateBadge();
    updateTotal();
}

// ACTUALIZAR TOTAL
function updateTotal() {
    const prices = document.querySelectorAll('.cart-prod-price');
    let total = 0;

    prices.forEach(p => {
        total += Number(p.textContent.replace('$', ''));
    });

    document.querySelector('.cart-total').textContent = `Total: $${total}`;
}

// ACTUALIZAR BADGE
function updateBadge() {
    const cartLi = document.querySelectorAll('.cart-content li'); 
    const badge = document.getElementById('cart-badge');

    const count = cartLi.length;
    badge.textContent = count;

    badge.style.display = count === 0 ? 'none' : 'block';
}

// ELIMINAR PRODUCTO DEL CARRITO
cartList.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-remove')) {
        const item = e.target.closest('li');
        item.remove();
        updateBadge();
        updateTotal();
    }
});

// INICIALIZAR
updateBadge();
updateTotal();