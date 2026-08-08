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
document.querySelectorAll('.photo-lightbox').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const overlay = document.createElement('div');
        overlay.className = 'photo-lightbox-overlay';

        const image = document.createElement('img');
        image.src = this.href;
        image.alt = this.querySelector('img')?.alt || '';

        overlay.appendChild(image);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', function () {
            overlay.remove();
        });
    });
});