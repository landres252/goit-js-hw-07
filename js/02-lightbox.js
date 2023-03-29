import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(element){
    return element
    .map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__item" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"          
              alt="${description}"
            />
          </a>
        </div>`;
        })
        .join("");
    }

galleryContainer.insertAdjacentHTML('beforeend', photosMarkup);

    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
      });