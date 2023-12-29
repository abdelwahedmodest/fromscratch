document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    let count = 0;

    function nextSlide() {
        count++;
        if (count >= slider.children.length) {
            count = 0;
        }
        updateSlider();
    }

    function updateSlider() {
        const offset = -100 * count + '%';
        slider.style.transform = 'translateX(' + offset + ')';
    }

    setInterval(nextSlide, 3000); // Change de diapositive toutes les 3 secondes
});
document.addEventListener("DOMContentLoaded", function () {
    const background = document.querySelector('.background-image');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const translateY = -scrollPosition * 0.5; // Adjust the multiplier for the desired effect
        const opacity = 0.5 - scrollPosition / 500; // Adjust the divisor for the desired fade effect

        background.style.transform = 'translateY(' + translateY + 'px)';
        background.style.opacity = opacity;
    });
});


