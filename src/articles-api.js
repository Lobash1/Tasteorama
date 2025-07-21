import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1/';
// axios.defaults.baseURL = 'https://project-lucky7.onrender.com/';

export const fetchArticlesWithTopic = async recipe => {
  const response = await axios.get(`/search?query=${recipe}`);
  return response.data.hits;
};
