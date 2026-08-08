document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".mobile-menu-button");
    const mobileNavigation = document.querySelector(".mobile-navigation");

    if (!menuButton || !mobileNavigation) {
        return;
    }

    menuButton.addEventListener("click", function () {

        const isOpen = mobileNavigation.classList.contains("active");

        if (isOpen) {
            mobileNavigation.classList.remove("active");
            menuButton.classList.remove("active");
            mobileNavigation.style.display = "none";
        } else {
            mobileNavigation.classList.add("active");
            menuButton.classList.add("active");
            mobileNavigation.style.display = "flex";
        }

    });


    const mobileLinks = mobileNavigation.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNavigation.classList.remove("active");
            menuButton.classList.remove("active");
            mobileNavigation.style.display = "none";

        });

    });

});