import images from "./app.js";

const ulGallery = document.querySelector('.js-gallery');
const cardsMarkup = createGalleryElements(images);

const lightbox = document.querySelector('.js-lightbox');

const overlay = document.querySelector('.lightbox__overlay');
overlay.addEventListener('click', closeOverlayOnClick)

const overlayImage = document.querySelector('.lightbox__image');

const btnCloseLightbox = document.querySelector('[data-action="close-lightbox"]');
btnCloseLightbox.addEventListener('click', closeOverlay)

ulGallery.insertAdjacentHTML('beforeend', cardsMarkup);

ulGallery.addEventListener('click', openOverlay);

function createGalleryElements(images) {
 return images.map(({preview, original, description}) => {
   return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
 }).join('');
  
}


function openOverlay(event) {
  event.preventDefault();
  window.addEventListener('keydown', closeOverlayOnEckape)
  
 
  if (event.target.classList.contains('gallery__image')) {
    lightbox.classList.add('is-open')
    overlayImage.src = event.target.dataset.source;
    overlayImage.alt = event.target.alt;
  }

  
}

function closeOverlay(event) {
  
  lightbox.classList.remove('is-open');
 
  overlayImage.src = "";
  overlayImage.alt = "";
 
  window.removeEventListener('keydown', closeOverlayOnEckape)
};

function closeOverlayOnClick(event) {
  if (event.currentTarget === event.target) {
   closeOverlay()
 }
}

function closeOverlayOnEckape(event) {
  if (event.code === "Escape") {
    closeOverlay()
  }

}



