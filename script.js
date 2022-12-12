const navIconClose = document.getElementById('nav-icon-close');
const navIconHamburger = document.getElementById('nav-icon-hamburger')
const mbNav = document.querySelector('.mb-nav');

navIconHamburger.addEventListener('click', () => {
    mbNav.style.display = "flex";
    navIconHamburger.style.display = "none";
})

navIconClose.addEventListener('click', () => {
    mbNav.style.display = "none";
    navIconHamburger.style.display = "flex";
})