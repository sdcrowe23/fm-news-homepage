(() => {
    const navIconClose = document.getElementById('nav-icon-close');
    const navIconHamburger = document.getElementById('nav-icon-hamburger');
    const mbNav = document.querySelector('.mb-nav');

    const changeNavDisplay = (display) => (_) => mbNav.style.display = display;

    navIconHamburger.addEventListener('click', changeNavDisplay('flex'));
    navIconClose.addEventListener('click', changeNavDisplay('none'));
})();