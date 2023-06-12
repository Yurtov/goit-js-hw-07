import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallaryList = document.querySelector(".gallery");
const gallaryMarkup = createGallaryMarkup(galleryItems);

gallaryList.insertAdjacentHTML("beforeend", gallaryMarkup);

function createGallaryMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `
         <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt=""${description}"
              />
          </a>
        </li>
    `;
		})
		.join("");
}

let gallery = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionPosition: "bottom",
	captionDelay: 250,
});
