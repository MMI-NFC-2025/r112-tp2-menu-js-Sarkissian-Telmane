const nav = document.querySelector("nav");
const toggle = document.querySelector("menu-btn")
toggle.addEventListener("toggle", () => {
    nav.ariaHidden = false;
    
})