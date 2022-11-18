import axios from 'axios';

const API_KEY = '29665218-16970e7e0c98d40c5a4df11bd';
const BASE_URL = 'https://pixabay.com/api/';

export const getImages = (imageQuery, page) => {
  return axios.get(
    `${BASE_URL}?q=${imageQuery}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
  );
};
