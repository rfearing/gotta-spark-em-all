import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

export const getPokemon = (url = 'https://pokeapi.co/api/v2/pokemon/') => (
  API.get(url)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(`${response.status}: ${response.statusText}`);
    })
);
