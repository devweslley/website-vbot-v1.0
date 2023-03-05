/* menu mobile - hamburguer */
const hamburguer = document.querySelector(".nav-menu-mobile");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});



