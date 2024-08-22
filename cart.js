// Función para agregar un elemento al carrito
function addToCart(item) {
    const cartItems = document.getElementById('cart-items');
    let itemExists = false;

    cartItems.querySelectorAll('.cart-item').forEach(cartItem => {
        if (cartItem.dataset.id === item.id) {
            // Si el item ya existe, aumentar la cantidad
            let quantityElement = cartItem.querySelector('.quantity');
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            itemExists = true;
        }
    });

    if (!itemExists) {
        // Si el item no existe, agregarlo
        const newItem = document.createElement('div');
        newItem.classList.add('cart-item');
        newItem.dataset.id = item.id;
        newItem.innerHTML = `
            <p>${item.name} - $${item.price} x <span class="quantity">1</span></p>
            <button class="remove-from-cart" data-id="${item.id}">Eliminar</button>
        `;
        cartItems.appendChild(newItem);
    }
}

// Función para eliminar un elemento del carrito
function removeFromCart(itemId) {
    const cartItems = document.getElementById('cart-items');
    const itemToRemove = cartItems.querySelector(`.cart-item[data-id="${itemId}"]`);
    if (itemToRemove) {
        let quantityElement = itemToRemove.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            // Disminuir la cantidad si es mayor a 1
            quantityElement.textContent = quantity - 1;
        } else {
            // Eliminar el item si la cantidad es 1
            cartItems.removeChild(itemToRemove);
        }
    }
}

// Función para vaciar el carrito
function clearCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
}
