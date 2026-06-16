// Kleiner Effekt: Header verfärbt sich beim Scrollen dunkel
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(11, 11, 11, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.boxShadow = 'none';
    }
});

function openForm() {
    document.getElementById("contact-modal").style.display = "block";
}

function closeForm() {
    document.getElementById("contact-modal").style.display = "none";
}