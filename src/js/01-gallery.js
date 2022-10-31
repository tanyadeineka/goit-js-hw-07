import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")
const items = []

galleryItems.forEach(element => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add("gallery__item");
    const galleryLink = document.createElement('a');
    galleryLink.classList.add("gallery__link");
    galleryLink.href = element.original;
    const galleryImage = document.createElement('img');
    galleryImage.classList.add("gallery__image");
    galleryImage.src = element.preview;
    galleryImage.setAttribute("data-source", element.original);
    galleryImage.alt = element.description;

    galleryItem.append(galleryLink);
    galleryLink.append(galleryImage);
    items.push(galleryItem);
})    

gallery.append(...items);