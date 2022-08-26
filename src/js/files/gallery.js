// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Подключение базового набора функционала
import lightGallery from "lightgallery";

// Базовые стили
import "@scss/gallery/lightgallery.scss";

// Запуск
const galleries = document.querySelectorAll("[data-gallery]");
if (galleries.length) {
    let galleyItems = [];
    galleries.forEach((gallery) => {
        galleyItems.push({
            gallery,
            galleryClass: lightGallery(gallery, {
                licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
                speed: 800,
            }),
        });
    });
    // Добавляем в объект модулей
    flsModules.gallery = galleyItems;
}
