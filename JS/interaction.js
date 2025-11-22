const cartIcon = document.querySelector('.header__icon--secondary');
const cartSidebar = document.querySelector('.cart-sidebar');
const cartClose = document.querySelector('.cart-close');

cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('active');
});

cartClose.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
});


const cartItems = document.querySelector ('.cart-content');

cartItems.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-remove')) {

        const item = e.target.closest('li');
        item.remove();

        updateBadge();
    }
})


function updateBadge() {
    const cartLi = document.querySelectorAll('.cart-content li'); 
    const badge = document.getElementById('cart-badge');

    const count = cartLi.length;
    badge.textContent = count;

    if (count === 0) {
        badge.style.display = 'none';
    } else {
        badge.style.display = 'block';
    }
}

const addButtons = document.querySelectorAll('.products__btn');
const cartList = document.querySelector('.cart-content');

addButtons.forEach(btn => {
    btn.addEventListener('click', () => {

        const name = btn.dataset.name;
        const price = btn.dataset.price;
        const img = btn.dataset.img;

        addToCart(name, price, img);
    });
});

function addToCart(name, price, img) {
    const li = document.createElement('li');

    li.innerHTML = `
        <div class="cart-item">
            <img class="cart-img-prod" src="/img/product01.webp" alt="">
            <div class="cart-description">
                <p class="cart-prod-description">Funko Pop Derpy #2260 K-Pop Demon Hunters</p>
                <p class="cart-prod-price">$319.00</p>
            </div>
            <i data-feather="trash" class="cart-remove"></i>
        </div>
        `;

        cartList.appendChild(li);

        feather.replace();

        updateBadge();
        updateTotal();
}

function updateTotal() {
    const prices = document.querySelectorAll('.cart-prod-price');
    let total = 0;

    prices.forEach(p => {
        total += Number(p.textContent.replace('$', ''));
});

document.querySelector('cart-total').textContent = `Total: $${total}`
}

updateBadge();
updateTotal();

cartList.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-remove')) {
        const item = e.target.closest('li');
        item.remove();
        updateBadge();
        updateTotal();
    }
});

