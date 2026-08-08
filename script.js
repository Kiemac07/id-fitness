const menuButton = document.querySelector(".mobile-menu-button");
const mobileNavigation = document.querySelector(".mobile-navigation");

if (menuButton && mobileNavigation) {
    menuButton.addEventListener("click", () => {
        mobileNavigation.classList.toggle("active");
        menuButton.classList.toggle("active");
    });

    const mobileLinks = mobileNavigation.querySelectorAll("a");

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileNavigation.classList.remove("active");
            menuButton.classList.remove("active");
        });
    });
}