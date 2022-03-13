const hamburger = document.querySelector('header nav .hamburger');
const mobileMenu = document.querySelector('header nav ul');
const menuItems = document.querySelectorAll('header nav ul li a');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 250) {
        header.style.backgroundColor = '#22242b';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    })
})