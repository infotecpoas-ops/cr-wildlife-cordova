// ===== Variables de galería =====
let currentImageIndex = 0;

// ===== Abrir galería =====
function openGallery(index) {
    const lightbox = document.getElementById('gallery-lightbox');
    const img = document.getElementById('lightbox-img');
    const title = document.getElementById('lightbox-title');
    const desc = document.getElementById('lightbox-desc');
    
    if (!lightbox || !img) return;
    
    currentImageIndex = index;
    
    // Usar galleryData de script.js
    const data = window.galleryData ? window.galleryData[index] : null;
    
    img.src = `images/gallery/photo${index}.jpg`;
    if (index === 0) img.src = 'images/logo-cr-wildlife.jpg';
    
    if (title && data) title.textContent = data.title;
    if (desc && data) desc.textContent = data.description;
    
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// ===== Cerrar galería =====
function closeGallery(event) {
    const lightbox = document.getElementById('gallery-lightbox');
    
    if (event.target === lightbox || event.target.classList.contains('close-lightbox')) {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// ===== Cambiar imagen =====
function changeImage(direction) {
    currentImageIndex += direction;
    
    const totalImages = 31; // 30 fotos + 1 logo
    if (currentImageIndex < 0) currentImageIndex = totalImages - 1;
    if (currentImageIndex >= totalImages) currentImageIndex = 0;
    
    const img = document.getElementById('lightbox-img');
    const title = document.getElementById('lightbox-title');
    const desc = document.getElementById('lightbox-desc');
    
    // Animación fade
    img.style.opacity = '0';
    
    setTimeout(() => {
        img.src = `images/gallery/photo${currentImageIndex}.jpg`;
        if (currentImageIndex === 0) img.src = 'images/logo-cr-wildlife.jpg';
        
        const data = window.galleryData ? window.galleryData[currentImageIndex] : null;
        if (title && data) title.textContent = data.title;
        if (desc && data) desc.textContent = data.description;
        
        img.style.opacity = '1';
    }, 200);
}

// ===== Navegación con teclado =====
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('gallery-lightbox');
    if (!lightbox.classList.contains('show')) return;
    
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
    if (e.key === 'Escape') {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// ===== Gestos táctiles para lightbox =====
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('gallery-lightbox');
    if (!lightbox) return;
    
    let touchStartX = 0;
    
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });
    
    lightbox.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                changeImage(1);
            } else {
                changeImage(-1);
            }
        }
    });
});