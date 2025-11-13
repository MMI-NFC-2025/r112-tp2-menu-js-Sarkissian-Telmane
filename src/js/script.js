const nav = document.querySelector("nav");
const toggle = document.querySelector(".menu-btn")
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
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
});