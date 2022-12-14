const navIconClose = document.getElementById('nav-icon-close');
const navIconHamburger = document.getElementById('nav-icon-hamburger');
const mbNavContainer = document.querySelector('.navigation-container');
const mbNavOverlay = document.querySelector('.overlay');
const mbNav = document.querySelector('.mb-nav');

navIconHamburger.addEventListener('click', () => {
    mbNav.style.width = "100%"
    // what does this do?
    mbNavContainer.style.width = "68.2%";
    // What does this do
    mbNavOverlay.style.width = "100%";
})

navIconClose.addEventListener('click', () => {
    mbNavContainer.style.width = "0";
    mbNavOverlay.style.width = "0";
})