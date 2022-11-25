const menuBtn = document.querySelector(".menu-button");
const hamburger = document.querySelector(".menu-button_burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav_item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
  menuNav.classList.toggle("open");
  navItems.forEach((item) => {
    item.classList.toggle("open");
  });
  if (!showMenu) {
    showMenu = true;
  } else {
    showMenu = false;
  }
}
