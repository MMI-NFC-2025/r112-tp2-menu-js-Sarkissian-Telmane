const nav = document.querySelector("nav");
const toggle = document.querySelector(".menu-btn")
toggle.addEventListener("click", () => {
    nav.ariaHidden = false;
    toggle.ariaExpanded = true;
});