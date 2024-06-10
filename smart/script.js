// JavaScript code for product listing and interaction
document.addEventListener('DOMContentLoaded', function() {
    // Example product data (you can replace this with actual data from a database)
    const products = [
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 20.99 },
        { id: 3, name: 'Product 3', price: 15.99 }
    ];

    const productList = document.getElementById('product-list');

    // Function to render product listings
    function renderProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productElement);
        });
    }

    // Function to add product to cart
    function addToCart(productId) {
        // Add logic to add product to shopping cart
        console.log('Product added to cart:', productId);
    }

    // Render initial product listings
    renderProducts();
});
