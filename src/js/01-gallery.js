// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
const list = document.querySelector(".gallery");

const markup = galleryItems
  .map((item) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
    </a>
    </li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", markup);

list.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
      return;
    }

  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" >`, options);
  instance.show();
};
