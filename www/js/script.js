document.addEventListener('DOMContentLoaded', function() {
    initMenu();
    initSlider();
});

function initMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeMenu = document.getElementById('closeMenu');
    const overlay = document.getElementById('menuOverlay');
    
    if (!menuToggle) return;
    
    menuToggle.onclick = () => {
        sideMenu.classList.add('open');
        overlay.classList.add('show');
    };
    
    if (closeMenu) {
        closeMenu.onclick = () => {
            sideMenu.classList.remove('open');
            overlay.classList.remove('show');
        };
    }
    
    if (overlay) {
        overlay.onclick = () => {
            sideMenu.classList.remove('open');
            overlay.classList.remove('show');
        };
    }
}

function initSlider() {
    const slider = document.getElementById('mobileSlider');
    if (!slider) return;
    
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.getElementById('sliderDots');
    
    if (!slides.length) return;
    
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.onclick = () => goToSlide(i);
        dots.appendChild(dot);
    }
    
    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentIndex = index;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }
    
    function updateDots() {
        const dots = document.querySelectorAll('.slider-dots span');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }
    
    setInterval(() => goToSlide(currentIndex + 1), 5000);
    updateDots();
}