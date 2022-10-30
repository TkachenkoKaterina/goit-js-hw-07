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
				`<a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>`,
		)
		.join("");
	// console.log(CreateTagsRef);

	galleryRef.insertAdjacentHTML("beforeend", CreateTagsRef);
}

createTagsOfCards(galleryItems);

galleryRef.addEventListener("click", onClickGallery);

var SimpleLightbox = window.SimpleLightbox;

function onClickGallery(event) {
	event.preventDefault();

	if (event.target.nodeName !== "IMG") {
		return;
	}

	var lightbox = new SimpleLightbox(".gallery a", {
		captionsData: "alt",
		loadingTimeout: 250,
	});
}
