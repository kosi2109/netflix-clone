import axios from "axios";

export const baseURL = 'https://api.themoviedb.org/3';
export const baseImageURL = 'https://image.tmdb.org/t/p/original';

const tmdbInstance = axios.create({
    baseURL
})

export default tmdbInstance;    