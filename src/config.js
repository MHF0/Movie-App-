// The API_KEY should be in .env
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '1bfa430aada4409bfa6a3c5528128e8a';

// Search
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_KEY=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
//sizes
const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w500';

export {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_KEY,API_URL,
    IMAGE_BASE_URL,
    BACKDROP_SIZE 
}