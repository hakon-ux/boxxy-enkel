// Extract just the JavaScript from index.html to test syntax

document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();

    // Make functions globally accessible
    window.openModal = function() {
    console.log('openModal called');
    const modal = document.getElementById('orderModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        console.error('orderModal not found');
    }
}

    window.closeModal = function() {
        console.log('closeModal called');
        const modal = document.getElementById('orderModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    window.toggleAddressField = function() {
    const delivery = document.getElementById('delivery').value;
    const addressGroup = document.getElementById('addressGroup');
    const addressInput = document.getElementById('address');
    
    if (delivery === 'address') {
        addressGroup.style.display = 'block';
        addressInput.required = true;
    } else {
        addressGroup.style.display = 'none';
        addressInput.required = false;
        addressInput.value = '';
    }
}

    // Contact modal functions
    window.openContactModal = function() {
    console.log('openContactModal called');
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        console.error('contactModal not found');
    }
}

    window.closeContactModal = function() {
    console.log('closeContactModal called');
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const orderModal = document.getElementById('orderModal');
    const contactModal = document.getElementById('contactModal');
    if (event.target == orderModal) {
        closeModal();
    }
    if (event.target == contactModal) {
        closeContactModal();
    }
}

// Handle form submission
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Create email body
    let deliveryInfo = '';
    if (data.delivery === 'address') {
        deliveryInfo = `Levering til adresse: ${data.address}`;
    } else if (data.delivery === 'oppaker') {
        deliveryInfo = 'Henting på Minilager Oppaker';
    } else if (data.delivery === 'lillestrom') {
        deliveryInfo = 'Henting på Minilager Lillestrøm';
    }
    
    const emailBody = `
Ny bestilling av shippingcontainer:

Størrelse: ${data.size}
${deliveryInfo}
Bedriftsnavn: ${data.company || 'Ikke oppgitt'}
Navn: ${data.name}
Telefon: ${data.phone}
E-post: ${data.email}
Ytterligere informasjon: ${data.message || 'Ingen'}
    `;
    
    // For now, we'll show an alert. In production, this would send to backend
    alert('Takk for din forespørsel, du blir snart kontaktet!');
    closeModal();
    this.reset();
});

    // Mobile menu toggle function
    window.toggleMobileMenu = function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        body.style.overflow = 'auto';
    } else {
        mobileMenu.classList.add('active');
        body.style.overflow = 'hidden';
    }
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        toggleMobileMenu();
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

}); // End DOMContentLoaded