// JavaScript for Glamorify E-commerce Website

// Add to Cart Functionality
const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const product = event.target.closest('.product');
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;
        
        cart.push({ name: productName, price: productPrice });
        updateCart();
        alert(`${productName} has been added to your cart.`);
    });
});

// Update Cart Display
function updateCart() {
    const cartElement = document.querySelector('#cart');
    cartElement.innerHTML = '';

    if (cart.length === 0) {
        cartElement.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        const cartItems = cart.map(item => `<li>${item.name} - ${item.price}</li>`).join('');
        cartElement.innerHTML = `
            <ul>${cartItems}</ul>
            <p>Total: ${calculateTotal()}</p>
        `;
    }
}

// Calculate Total Price
function calculateTotal() {
    return cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return total + price;
    }, 0).toFixed(2);
}

// Contact Form Submission
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', event => {
    event.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    alert(`Thank you, ${name}! Your message has been sent.`);
    contactForm.reset();
});

// New Feature: Add more products dynamically
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');

    const newProducts = [
        { name: 'Blush Powder', price: '$9.99', image: 'images/blush.jpg' },
        { name: 'Highlighter Stick', price: '$11.99', image: 'images/highlighter.jpg' },
        { name: 'Eyeliner Pencil', price: '$7.99', image: 'images/eyeliner.jpg' },
        { name: 'Makeup Brushes Set', price: '$19.99', image: 'images/brushes.jpg' },
        { name: 'Nail Polish Kit', price: '$14.99', image: 'images/nail-polish.jpg' },
        { name: 'BB Cream', price: '$15.99', image: 'images/bb-cream.jpg' },
        { name: 'Compact Powder', price: '$10.99', image: 'images/compact-powder.jpg' },
        { name: 'Lip Gloss', price: '$8.99', image: 'images/lip-gloss.jpg' }
    ];

    newProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;

        productGrid.appendChild(productElement);
    });

    // Reattach add-to-cart event listeners for new products
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const product = event.target.closest('.product');
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p').textContent;

            cart.push({ name: productName, price: productPrice });
            updateCart();
            alert(`${productName} has been added to your cart.`);
        });
    });
});
