import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49495202-279cad4ade428b3db0cc5c04a';

export function getGallery(queryName) {
    return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: queryName,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
        },
    })
    .then(response => response.data)
    .catch(error => {
        console.error("API error:", error);
        throw new Error('Oops! Something went wrong. Please try again later.');
    });
}