const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("closeIcon");
const mbNav = document.querySelector(".mb-nav");

hamburger.addEventListener('click', () => {
    if (hamburger) {
        mbNav.style.display = "flex"
    } else {
        mbNav.style.display = 'none'
    }
})

closeIcon.addEventListener('click', () => {
    if (closeIcon) {
        mbNav.style.display = "none"
    } else {
        mbNav.style.display = "flex"
    }
})