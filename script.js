document.addEventListener('DOMContentLoaded', function () {
    // Slaidšova funkcionalitāte
    let currentImageIndex = 0;
    const images = [
        'https://picsum.photos/1216/304?image=0',
        'https://picsum.photos/1216/304?image=1',
        'https://picsum.photos/1216/304?image=2'
    ];
    const sliderImage = document.getElementById('slider-image');
    const nextButton = document.querySelector('.slider__next');
    const prevButton = document.querySelector('.slider__prev');
    const dots = document.querySelectorAll('.slider__dot');

    function updateSlider() {
        sliderImage.src = images[currentImageIndex];
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentImageIndex);
        });
    }

    nextButton.addEventListener('click', function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateSlider();
    });

    prevButton.addEventListener('click', function () {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            currentImageIndex = index;
            updateSlider();
        });
    });

    // Sākotnējā attēla un punktiņu stāvokļa atjaunināšana
    updateSlider();
});
