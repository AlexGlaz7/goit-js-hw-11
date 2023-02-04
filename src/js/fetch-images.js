import axios from 'axios';
export { fetchImages };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '33368489-8726f5d8adad5faef124f4e3c';

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}
