import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    /* 'X-RapidAPI-Key': '927146d7c8msh18d55f0fa0d8ccep139f3djsnb33c9a947344', */
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { date } = await axios.get(`${BASE_URL}/${url}`, options);
  return date;
}