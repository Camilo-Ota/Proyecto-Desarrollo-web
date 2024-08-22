document.addEventListener('DOMContentLoaded', () => {
    const cartElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-amount');
    const cartWindow = document.getElementById('cart-window');
    const cartIcon = document.getElementById('cart-icon');
    const closeCartButton = document.getElementById('close-cart');

    // Función para actualizar el carrito en la ventana emergente
    function updateCartUI() {
        const cart = getCart();
        cartElement.innerHTML = '';
        cart.forEach((item) => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `
                <p>${item.name} - $${item.price}</p>
                <button class="remove-from-cart" data-id="${item.id}">Eliminar</button>
            `;
            cartElement.appendChild(cartItem);
        });
        const total = calculateTotal(cart);
        totalElement.textContent = total;
    }

    function calculateTotal(cart) {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Mostrar el carrito al hacer clic en el ícono
    cartIcon.addEventListener('click', () => {
        cartWindow.classList.toggle('show');
        cartWindow.classList.toggle('hidden');
        updateCartUI();
    });

    // Cerrar el carrito
    closeCartButton.addEventListener('click', () => {
        cartWindow.classList.add('hidden');
        cartWindow.classList.remove('show');
    });

    // Agregar listener para agregar elementos al carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const item = {
                id: e.target.dataset.id,
                name: e.target.dataset.name,
                price: e.target.dataset.price,
            };
            addToCart(item);
            updateCartUI();
        });
    });

    // Agregar listener para eliminar elementos del carrito
    cartElement.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-from-cart')) {
            const item = {
                id: e.target.dataset.id,
            };
            removeFromCart(item);
            updateCartUI();
        }
    });
});
