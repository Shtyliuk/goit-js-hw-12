import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49495202-279cad4ade428b3db0cc5c04a';

export async function getGallery(queryName, page = 1) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: queryName,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                per_page: 15,
                page: page,
            },
        });
        return response.data;
    } catch (error) {
        console.error("API error:", error);
        throw new Error('Oops! Something went wrong. Please try again later.');
    }
}
