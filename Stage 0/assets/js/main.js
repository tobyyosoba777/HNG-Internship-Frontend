let hamburger = document.querySelector('.bx-menu');
let menu = document.querySelector('.menu')

menu.addEventListener("click", () => {
    if (hamburger.classList.contains("bx-menu")){
        hamburger.classList.replace("bx-menu", "bx-x")
    }
    else if(hamburger.classList.contains("bx-x")) {
        hamburger.classList.replace("bx-x", "bx-menu")
    }
})

let darkMode = document.querySelector(".dark-mode-toggle");
let darkModeIcon = document.querySelector('.dark-mode-toggle i')

darkMode.addEventListener("click", () => {
    if(darkModeIcon.classList.contains('bx-moon')) {
        document.body.classList.add('dark-mode')
        darkModeIcon.classList.replace('bx-moon', 'bx-sun')
    }
    else {
        document.body.classList.remove('dark-mode')
        darkModeIcon.classList.replace('bx-sun', 'bx-moon')
    }
})