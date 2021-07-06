const toogle = document.querySelector(".toogle")
const navmenu = document.querySelector(".nav-menu")

toogle.addEventListener("click", () => {
    navmenu.classList.toggle("nav-menu_visible")
});
