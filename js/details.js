document.addEventListener('DOMContentLoaded', function() {
    const name = localStorage.getItem('product-name');
    const description = localStorage.getItem('product-description');
    const image = localStorage.getItem('product-image');
    const available = localStorage.getItem('product-available');


    document.getElementById('product-name').innerText = name;
    document.getElementById('product-description').innerText = description;
    document.getElementById('product-image').src = image;
    document.getElementById('product-available').innerText = available;

});
