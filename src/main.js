import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getGallery } from './js/pixabay-api';
import { renderGallery, clearGallery, refs } from './js/render-functions';

let currentPage = 1;
let currentQuery = '';
refs.loader.style.display = 'none';
refs.loadMoreBtn.style.display = 'none';

refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  currentQuery = e.target.elements['search-text'].value.trim();
  currentPage = 1;
  if (!currentQuery) {
    iziToast.show({
      message: 'Search query cannot be empty!',
      messageColor: 'white',
      backgroundColor: 'orange',
      position: 'topRight',
    });
    return;
  }
  refs.loader.style.display = 'flex';
  refs.loadMoreBtn.style.display = 'none';
  clearGallery();
  try {
    const data = await getGallery(currentQuery, currentPage);
    if (data.hits.length === 0) {
      iziToast.show({
        message: 'No images found. Try again!',
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight',
      });
    } else {
      renderGallery(data);
      if (data.totalHits > currentPage * 15)
        refs.loadMoreBtn.style.display = 'block';
    }
  } catch (error) {
    iziToast.show({
      message: error.message,
      messageColor: 'white',
      backgroundColor: 'red',
      position: 'topRight',
    });
  } finally {
    refs.loader.style.display = 'none';
  }
  e.target.reset();
});

refs.loadMoreBtn.addEventListener('click', async () => {
  currentPage++;
  refs.loader.style.display = 'flex';
  refs.loadMoreBtn.style.display = 'none';
  try {
    const data = await getGallery(currentQuery, currentPage);
    renderGallery(data);
    if (data.totalHits > currentPage * 15)
      refs.loadMoreBtn.style.display = 'block';
    else
      iziToast.show({
        message: 'No more images to load.',
        messageColor: 'white',
        backgroundColor: 'blue',
        position: 'topRight',
      });
  } catch (error) {
    iziToast.show({
      message: error.message,
      messageColor: 'white',
      backgroundColor: 'red',
      position: 'topRight',
    });
  } finally {
    refs.loader.style.display = 'none';
  }
});

 // Додаємо плавне прокручування після завантаження нових зображень
function scroll() {
  const listItem = document.querySelector('.gallery-item');
  const heightScroll = listItem.getBoundingClientRect().height * 2;
  window.scrollBy({
    top: heightScroll,
    left: 0,
    behavior: 'smooth',
  });
}