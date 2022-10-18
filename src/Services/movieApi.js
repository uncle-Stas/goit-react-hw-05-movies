import axios from 'axios';

const API_KEY = '006535a90e42ebf59916948f18019782';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getTrandingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    const trandMovies = await response.data;

    return trandMovies;
  } catch (error) {
    console.log(error.response.data.status_message);
  }
}

export async function getMoviesByQuery(query) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const queryMovies = await response.data;
    console.log('queryMovies: ', queryMovies);

    return queryMovies;
  } catch (error) {
    console.log(error.response.data.status_message);
  }
}

export async function getMovieById(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    const movie = await response.data;

    return movie;
  } catch (error) {
    console.log(error.response.data.status_message);
  }
}

export async function getMovieActors(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    const actors = await response.data;
    console.log('actors: ', actors);

    return actors;
  } catch (error) {
    console.log(error.response.data.status_message);
  }
}

export async function getMovieReviews(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
    );
    const reviews = await response.data;
    console.log('reviews: ', reviews);

    return reviews;
  } catch (error) {
    console.log(error.response.data.status_message);
  }
}
