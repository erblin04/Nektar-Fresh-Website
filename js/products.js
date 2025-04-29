function filterProducts(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (category === 'all') {
            product.style.display = 'block';
        } else {
            if (product.getAttribute('data-category') === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        }
    });
}

const products = document.querySelectorAll('.product');
products.forEach(product => {
    product.addEventListener('click', function() {
        const name = product.getAttribute('data-name');
        const description = product.getAttribute('data-description');
        const image = product.getAttribute('data-image');
        const available = product.getAttribute('data-available')

        localStorage.setItem('product-name', name);
        localStorage.setItem('product-description', description);
        localStorage.setItem('product-image', image);
        localStorage.setItem('product-available', available);


        window.location.href = 'product-details.html';
    });
});