const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Load product data
const productsData = JSON.parse(fs.readFileSync('products.json', 'utf8'));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Dynamic route for category pages
app.get('/:category', (req, res) => {
    const category = req.params.category;
    const categoryData = productsData.categories.find(cat => cat.name.toLowerCase() === category.toLowerCase());

    if (categoryData) {
        res.sendFile(path.join(__dirname, 'views', 'category.html'));
    } else {
        res.status(404).send('Category not found');
    }
});

// Dynamic route for product detail pages
app.get('/:category/:productId', (req, res) => {
    const category = req.params.category;
    const productId = parseInt(req.params.productId, 10);
    const categoryData = productsData.categories.find(cat => cat.name.toLowerCase() === category.toLowerCase());

    if (categoryData) {
        const product = categoryData.products.find(prod => prod.id === productId);

        if (product) {
            res.sendFile(path.join(__dirname, 'views', 'product.html'));
        } else {
            res.status(404).send('Product not found');
        }
    } else {
        res.status(404).send('Category not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});