"use strict";

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

// ============== 1.Создание и рендер разметки по массиву данных ==============
function createTagsOfCards(galleryItems) {
	const CreateTagsRef = galleryItems
		.map(
			({ preview, original, description }) =>
				`<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`,
		)
		.join("");
	// console.log(CreateTagsRef);

	galleryRef.insertAdjacentHTML("beforeend", CreateTagsRef);
}

createTagsOfCards(galleryItems);

// ============== 2-5 ==============
galleryRef.addEventListener("click", onClickGallery);

function onClickGallery(event) {
	event.preventDefault();

	if (event.target.nodeName !== "IMG") {
		return;
	}
	const urlLargeImg = event.target.dataset.source;
	console.log(urlLargeImg);

	const instance = basicLightbox.create(`<img src="${urlLargeImg}" width="800" height="600">`);
	instance.show();

	const bodyRef = document.querySelector("body");

	bodyRef.addEventListener("keydown", onClose);

	function onClose(event) {
		if (event.code === "Escape") {
			instance.close();
		}
	}
}
