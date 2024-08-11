document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname.split('/');
    
    if (path.length === 2) {
        // Load category products
        const category = path[1];
        loadCategoryProducts(category);
    } else if (path.length === 3) {
        // Load product details
        const category = path[1];
        const productId = path[2];
        loadProductDetails(category, productId);
    }
});

function loadCategoryProducts(category) {
    fetch('/products.json')
        .then(response => response.json())
        .then(data => {
            const categoryData = data.categories.find(cat => cat.name.toLowerCase() === category.toLowerCase());
            if (categoryData) {
                const productsContainer = document.getElementById('products');
                productsContainer.innerHTML = '';
                categoryData.products.forEach(product => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <p>${product.name}</p>
                        <p>$${product.price}</p>`;
                    
                    card.onclick = () => location.href = `/${category}/${product.id}`;
                    productsContainer.appendChild(card);
                });
            }
        });
}

function loadProductDetails(category, productId) {
    fetch(".../products.json")
        .then(response => response.json())
        .then(data => {
            const categoryData = data.categories.find(cat => cat.name.toLowerCase() === category.toLowerCase());
            if (categoryData) {
                const product = categoryData.products.find(prod => prod.id == productId);
                if (product) {
                    const productDetailContainer = document.getElementById('product-detail');
                    productDetailContainer.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <h2>${product.name}</h2>
                        <p>Price: $${product.price}</p>
                        <p>Description: Lorem ipsum dolor sit amet.</p>
                    `;
                }
            }
        });
}