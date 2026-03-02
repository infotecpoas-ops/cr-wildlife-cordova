document.addEventListener('deviceready', function() {
    console.log('Cordova listo');
    if (window.StatusBar) {
        StatusBar.styleLightContent();
    }
}, false);

function openWhatsApp() {
    const phone = '50672565865';
    const msg = encodeURIComponent('Hola, me interesa información sobre sus expediciones.');
    window.open(`https://wa.me/${phone}?text=${msg}`, '_system');
}

function makePhoneCall(number) {
    if (confirm(`¿Llamar al ${number}?`)) {
        window.location.href = `tel:${number}`;
    }
}

function sendEmail() {
    window.location.href = 'mailto:crlifewildtours@gmail.com?subject=Información desde la app';
}

function sendContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const msg = document.getElementById('message')?.value;
    
    if (!name || !email || !msg) {
        showMessage('error', 'Completa todos los campos');
        return;
    }
    
    const subject = encodeURIComponent(`Contacto: ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\nMensaje: ${msg}`);
    window.location.href = `mailto:crlifewildtours@gmail.com?subject=${subject}&body=${body}`;
    showMessage('success', 'Abriendo correo...');
}

function showMessage(type, text) {
    const msgDiv = document.getElementById('formMessage');
    if (!msgDiv) return;
    msgDiv.innerHTML = text;
    msgDiv.style.background = type === 'success' ? 'rgba(46,204,113,0.1)' : 'rgba(231,76,60,0.1)';
    msgDiv.style.color = type === 'success' ? '#2ecc71' : '#e74c3c';
    msgDiv.style.border = `1px solid ${type === 'success' ? '#2ecc71' : '#e74c3c'}`;
    setTimeout(() => msgDiv.innerHTML = '', 3000);
}

function openFacebook() {
    window.open('https://facebook.com/tupagina', '_system');
}

function openInstagram() {
    window.open('https://instagram.com/tucuenta', '_system');
}

function openYouTube() {
    window.open('https://youtube.com/@tucanal', '_system');
}