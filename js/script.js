let currentIndex = 0;
const images = [
    'images/orange1.png',
    'images/apple.png', 
    'images/fruits.png'
];

const changeImage = () => {
    const imgElement = document.querySelector('.orange-img');
    imgElement.style.opacity = 0;
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
        imgElement.style.opacity = 1;
    }, 1000); 
};

setInterval(changeImage, 5000);


