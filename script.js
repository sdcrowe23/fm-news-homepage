const navIconClose = document.getElementById('nav-icon-close');
const navIconHamburger = document.getElementById('nav-icon-hamburger');
const mbNavContainer = document.querySelector('.navigation-container');
const mbNavOverlay = document.querySelector('.overlay');
const mbNav = document.querySelector('.mb-nav');

navIconHamburger.addEventListener('click', () => {
    mbNav.style.width = "100%"
    navIconClose.style.display = "flex"
    mbNavContainer.style.width = "68.2%";
    mbNavOverlay.style.width = "100%";
    mbNavOverlay.style.left = "0";
    navIconHamburger.style.width = "none";
})

navIconClose.addEventListener('click', () => {
    mbNav.style.width = "0";
    navIconClose.style.display = "none"
    mbNavContainer.style.width = "0";
    mbNavOverlay.style.width = "0";
})