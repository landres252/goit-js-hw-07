import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const photosMarkup = createGalleryItem(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', photosMarkup);


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
              data-source="${original}"
            />
          </a>
        </div>`;
        })
        .join("");
    }


const onContainerClick = (evento) => {
  evento.preventDefault();

  if (evento.target.classList.contains("gallery")) 
    return;
    const source = evento.target.dataset.source;
    
  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();
};

galleryContainer.addEventListener("click", onContainerClick);