import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

function createGalleryItemsMarkup() {
  const galleryEl = galleryItems
    .map(
      (item) =>
        `<li>
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
</li>`
    )
    .join("");

  gallery.innerHTML = galleryEl;
}
createGalleryItemsMarkup();

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
