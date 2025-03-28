import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const refs = {
    form: document.querySelector('.form'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
};

// Ініціалізація SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
});

function galleryTemplate(element) {  
    const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = element;
    return `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      </a>
      <ul class="gallery-body">
        <li class="gallery-info">
          <h3>Likes:</h3>
          <p>${likes}</p>
        </li>
        <li class="gallery-info">
          <h3>Views:</h3>
          <p>${views}</p>
        </li>
        <li class="gallery-info">
          <h3>Comments:</h3>
          <p>${comments}</p>
        </li>
        <li class="gallery-info">
          <h3>Downloads:</h3>
          <p>${downloads}</p>
        </li>
      </ul>
    </li>`;
}

// Функція очищення галереї перед новим пошуком
export function clearGallery() {
    refs.gallery.innerHTML = '';
}

export function renderGallery(elements) { 
    const markup = elements.hits.map(galleryTemplate).join('\n');       
    refs.gallery.insertAdjacentHTML('beforeend', markup);

    // Оновлюємо SimpleLightbox
    lightbox.refresh();
}