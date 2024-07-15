document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const products = document.querySelectorAll('.product');
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');

    products.forEach(product => {
        const button = product.querySelector('.add-to-cart');
        button.addEventListener('click', () => {
            const id = product.getAttribute('data-id');
            const name = product.querySelector('h3').textContent;
            const price = parseFloat(product.querySelector('p').textContent.replace('Price: $', ''));
            addToCart(id, name, price);
        });
    });

    function addToCart(id, name, price) {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
        renderCart();
    }

    function renderCart() {
        cartItems.innerHTML = '';
        let totalPrice = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            cartItems.appendChild(li);
            totalPrice += item.price * item.quantity;
        });
        total.textContent = totalPrice.toFixed(2);
    }
});
