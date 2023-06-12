import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallaryList = document.querySelector(".gallery");
const gallaryMarkup = createGallaryMarkup(galleryItems);

gallaryList.insertAdjacentHTML("beforeend", gallaryMarkup);
gallaryList.addEventListener("click", handelOpenNormalImg);

function createGallaryMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
				/>
            </a>
        </li>
    `;
		})
		.join("");
}

const instance = basicLightbox.create(`<img width="1280" height="auto" src="">`, {
	onShow: instance => {
		window.addEventListener("keydown", handelEscClose);
	},
	onClose: instance => {
		window.removeEventListener("keydown", handelEscClose);
	},
});

function handelOpenNormalImg(e) {
	e.preventDefault();

	const isDatasetEl = e.target.dataset.source;
	if (!isDatasetEl) {
		return;
	}
	instance.element().querySelector("img").src = isDatasetEl;
	instance.show();
}

function handelEscClose(e) {
	if (e.code !== "Escape") return;
	instance.close();
}
