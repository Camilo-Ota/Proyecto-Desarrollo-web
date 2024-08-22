document.addEventListener('DOMContentLoaded', () => {
    const cartElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-amount');
    const cartWindow = document.getElementById('cart-window');
    const cartIcon = document.getElementById('cart-icon');
    const closeCartButton = document.getElementById('close-cart');
    const clearCartButton = document.getElementById('clear-cart');

    // Función para calcular el total del carrito
    function calculateTotal() {
        const cartItems = document.querySelectorAll('#cart-items .cart-item');
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('p').textContent.split('$')[1].split(' ')[0]);
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        return total;
    }

    // Función para actualizar el carrito en la ventana emergente
    function updateCartUI() {
        const total = calculateTotal();
        totalElement.textContent = total;
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
                price: parseFloat(e.target.dataset.price),
            };
            addToCart(item);
            updateCartUI();
        });
    });

    // Agregar listener para eliminar elementos del carrito
    cartElement.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-from-cart')) {
            removeFromCart(e.target.dataset.id);
            updateCartUI();
        }
    });

    // Agregar listener para vaciar el carrito
    clearCartButton.addEventListener('click', () => {
        clearCart();
        updateCartUI();
    });
});
