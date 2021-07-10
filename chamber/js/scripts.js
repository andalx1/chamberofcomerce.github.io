document.querySelector('#lastmod').textContent = document.lastModified;

const toogle = document.querySelector(".toogle")
const navmenu = document.querySelector(".nav-menu")

toogle.addEventListener("click", () => {
    navmenu.classList.toggle("nav-menu_visible")
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
