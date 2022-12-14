import Swiper, { Navigation, Parallax, Pagination, Keyboard } from "swiper";
import "../../scss/base/swiper.scss";

function initSliders() {
    if (document.querySelector(".slider-main__swiper")) {
        new Swiper(".slider-main__swiper", {
            modules: [Navigation, Pagination, Parallax, Keyboard],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 32,
            autoHeight: false,
            speed: 800,
            pagination: {
                el: ".controls-slider-main__dotts",
                clickable: true,
            },
            navigation: {
                nextEl: ".slider-main .slider-arrow_next",
                prevEl: ".slider-main .slider-arrow_prev",
            },

            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
            loop: true,
            parallax: true,
        });
    }

    if (document.querySelector(".slider-rooms__swiper")) {
        new Swiper(".slider-rooms__swiper", {
            modules: [Navigation, Pagination, Parallax, Keyboard],
            observer: true,
            observeParents: true,
            slidesPerView: "auto",
            spaceBetween: 24,
            autoHeight: false,
            speed: 800,
            pagination: {
                el: ".slider-rooms__dotts",
                clickable: true,
            },
            navigation: {
                nextEl: ".slider-rooms .slider-arrow_next",
                prevEl: ".slider-rooms .slider-arrow_prev",
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
            loop: true,
            parallax: true,
        });
    }

    if (document.querySelector(".slider-tips__swiper")) {
        new Swiper(".slider-tips__swiper", {
            modules: [Navigation, Pagination, Parallax, Keyboard],
            observer: true,
            observeParents: true,
            slidesPerView: 3,
            spaceBetween: 32,
            autoHeight: false,
            speed: 800,
            pagination: {
                el: ".slider-tips__dotts",
                clickable: true,
            },
            navigation: {
                nextEl: ".slider-tips .slider-arrow_next",
                prevEl: ".slider-tips .slider-arrow_prev",
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
            loop: true,
            parallax: true,
            breakpoints: {
                320: {
                    slidesPerView: 1.1,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
            },
        });
    }
}

window.addEventListener("load", function (e) {
    // ???????????? ?????????????????????????? ??????????????????
    initSliders();
});
