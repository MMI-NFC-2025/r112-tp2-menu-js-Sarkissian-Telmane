const nav = document.querySelector("nav");
const toggle = document.querySelector(".menu-btn")
const body = document.querySelector("body");
toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    nav.ariaHidden = false;
    toggle.ariaExpanded = true;
    if (isOpen) {
        nav.ariaHidden = true;
        toggle.ariaExpanded = false;
        
    }
    else {
        nav.ariaHidden = false;
        toggle.ariaExpanded = true;
    }
    body.classList.toggle("noscroll");
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    
});
