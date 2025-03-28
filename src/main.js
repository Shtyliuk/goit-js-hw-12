import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getGallery } from './js/pixabay-api';
import { renderGallery, clearGallery, refs } from './js/render-functions';

refs.loader.style.display = 'none';

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const query = e.target.elements['search-text'].value.trim();

    if (!query) {
        iziToast.show({
            message: 'Search query cannot be empty. Please enter a keyword!',
            messageColor: 'white',
            backgroundColor: 'orange',
            position: 'topRight',
        });
        return;
    }

    refs.loader.style.display = 'flex';
    clearGallery();

    getGallery(query)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.show({
                    message: 'Sorry, no images found. Try again!',
                    messageColor: 'white',
                    backgroundColor: 'red',
                    position: 'topRight',
                });
            } else {
                renderGallery(data);
            }
        })
        .catch(error => {
            iziToast.show({
                message: error.message,
                messageColor: 'white',
                backgroundColor: 'red',
                position: 'topRight',
            });
        })
        .finally(() => {
            refs.loader.style.display = 'none';
        });

    e.target.reset();
}