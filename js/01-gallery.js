import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);
// Change code below this line
const gallery = document.querySelector(".gallery");

function createGalleryItemsMarkup() {
  const galleryEl = galleryItems
    .map(
      (item) =>
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

  gallery.innerHTML = galleryEl;
}
createGalleryItemsMarkup();

const instance = basicLightbox.create(
  `<img width="1280" height="auto" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscKeyPress);
    },
  }
);

gallery.addEventListener("click", onImgClick);

function onImgClick(e) {
  e.preventDefault();
  const datasetSource = e.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector("img").src = datasetSource;
  instance.show();
}
function onEscKeyPress(e) {
  if (e.code !== "Escape") return;
  instance.close();
}
