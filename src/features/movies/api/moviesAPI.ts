import { API } from './client';

const movApi = new API();

// A mock function to mimic making an async request for data
export function fetchMovies(page = 1) {
  return new Promise<{ data: any }>(async (resolve) => {
    const host = 'https://api.themoviedb.org/';
    const response = await fetch(host + '3/movie/popular?api_key='+movApi.getApiKey()+'&language='+movApi.getLocale()+'&page='+page);
    const movies = await response.json();
    setTimeout(() => resolve({ data: movies }), 500)
  });
}
