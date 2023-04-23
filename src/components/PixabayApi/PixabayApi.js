import axios from 'axios';

const API_KEY = '34316664-466e29a341a60f27537c73320';

axios.defaults.baseURL = `https://pixabay.com/api/`;

const getImages = async (search, page) => {
  const response = await axios.get(
    `?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

export default getImages;
