/* =========================================
   ID FITNESS — SCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileNavigation = document.querySelector(".mobile-navigation");

if (mobileMenuButton && mobileNavigation) {

    mobileMenuButton.addEventListener("click", () => {
        mobileNavigation.classList.toggle("active");
    });


    mobileNavigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            mobileNavigation.classList.remove("active");
        });

    });

}


/* =========================================
   PHOTO LIGHTBOX
========================================= */

document.querySelectorAll(".photo-lightbox").forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const overlay = document.createElement("div");

        overlay.className = "photo-lightbox-overlay";


        const image = document.createElement("img");

        image.src = this.href;

        image.alt =
            this.querySelector("img")?.alt ||
            "ID Fitness image";


        overlay.appendChild(image);

        document.body.appendChild(overlay);


        overlay.addEventListener("click", () => {
            overlay.remove();
        });

    });

});


/* =========================================
   ESCAPE KEY — CLOSE LIGHTBOX / MENU
========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        const overlay =
            document.querySelector(".photo-lightbox-overlay");

        if (overlay) {
            overlay.remove();
        }


        if (mobileNavigation) {
            mobileNavigation.classList.remove("active");
        }

    }

});


/* =========================================
   SMOOTH NAVIGATION
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (
            targetId === "#" ||
            !targetId ||
            targetId.length < 2
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) {
        return;
    }

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================================
   IMAGE LOAD ANIMATION
========================================= */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("load", () => {
        image.classList.add("loaded");
    });

});
function openVideoLightbox() {
    const lightbox = document.getElementById("videoLightbox");
    const video = document.getElementById("isaacTrainingVideo");

    lightbox.classList.add("active");
    video.currentTime = 0;
    video.pause();
}

function closeVideoLightbox(event) {
    if (
        event.target.id === "videoLightbox" ||
        event.target.classList.contains("video-lightbox-close")
    ) {
        const lightbox = document.getElementById("videoLightbox");
        const video = document.getElementById("isaacTrainingVideo");

        video.pause();
        video.currentTime = 0;
        lightbox.classList.remove("active");
    }
}
const isaacVideo = document.getElementById("isaacTrainingVideo");
const videoPlayButton = document.getElementById("videoPlayButton");

if (isaacVideo && videoPlayButton) {

    videoPlayButton.addEventListener("click", function () {

        if (isaacVideo.paused) {
            isaacVideo.play();
            videoPlayButton.textContent = "Ⅱ";
            videoPlayButton.classList.add("is-playing");
        } else {
            isaacVideo.pause();
            videoPlayButton.textContent = "▶";
            videoPlayButton.classList.remove("is-playing");
        }

    });

    isaacVideo.addEventListener("click", function () {

        if (isaacVideo.paused) {
            isaacVideo.play();
            videoPlayButton.textContent = "Ⅱ";
            videoPlayButton.classList.add("is-playing");
        } else {
            isaacVideo.pause();
            videoPlayButton.textContent = "▶";
            videoPlayButton.classList.remove("is-playing");
        }

    });

}